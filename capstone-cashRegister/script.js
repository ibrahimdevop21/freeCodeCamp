document.addEventListener('DOMContentLoaded', function () {
  const price = 19.5;
  let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ];

  const cashInput = document.getElementById('cash');
  const changeDue = document.getElementById('change-due');
  const purchaseBtn = document.getElementById('purchase-btn');

  purchaseBtn.addEventListener('click', calculateChange);

  function calculateChange() {
    const cash = parseFloat(cashInput.value);
    const change = cash - price;

    if (cash < price) {
      alert('Customer does not have enough money to purchase the item');
      return;
    }

    if (change === 0) {
      changeDue.textContent = 'No change due - customer paid with exact cash';
    } else {
      const changeArray = makeChange(change);
      if (changeArray) {
        changeDue.textContent =
          'Status: OPEN ' +
          changeArray
            .map((item) => `${item[0]}: $${item[1].toFixed(2)}`)
            .join(' ');
      } else {
        changeDue.textContent = 'Status: INSUFFICIENT_FUNDS';
      }
    }
  }

  function getTotalCid() {
    return cid.reduce((acc, curr) => acc + curr[1], 0);
  }

  function makeChange(change) {
    const changeArray = [];
    let remainingChange = change;

    for (let i = cid.length - 1; i >= 0; i--) {
      const coinName = cid[i][0];
      const coinValue = cid[i][1];
      const maxCoinToUse = Math.min(remainingChange / coinValue, cid[i][1]);

      let coinCount = 0;
      while (
        cid[i][1] > 0 &&
        remainingChange >= coinValue &&
        coinCount < maxCoinToUse
      ) {
        remainingChange -= coinValue;
        remainingChange = Math.round(remainingChange * 100) / 100;
        cid[i][1] -= coinValue;
        coinCount++;
      }

      if (coinCount > 0) {
        changeArray.push([coinName, coinCount * coinValue]);
      }
    }

    if (remainingChange === 0) {
      return changeArray;
    } else if (remainingChange < 0.01) {
      return changeArray;
    } else {
      return null;
    }
  }
});
