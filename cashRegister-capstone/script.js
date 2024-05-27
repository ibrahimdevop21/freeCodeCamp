let price = 12.32;
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

let cashInput = document.getElementById('cash');
let changeDue = document.getElementById('change-due');
let purchaseBtn = document.getElementById('purchase-btn');

purchaseBtn.addEventListener('click', function () {
  let cash = Number(cashInput.value);

  // Check if cash is less than price
  if (cash < price) {
    alert('Customer does not have enough money to purchase the item');
    return; // Stop further execution
  }

  let totalChangeDue = cash - price;

  if (totalChangeDue === 0) {
    changeDue.innerText = 'No change due - customer paid with exact cash';
    return; // Stop further execution
  }

  function calculateChange(price, cash, cid) {
    let change = [];
    let totalChange = totalChangeDue;

    for (let i = cid.length - 1; i >= 0; i--) {
      let denomination = cid[i][0];
      let denominationAmount = cid[i][1];

      let denominationValue;
      switch (denomination) {
        case 'PENNY':
          denominationValue = 0.01;
          break;
        case 'NICKEL':
          denominationValue = 0.05;
          break;
        case 'DIME':
          denominationValue = 0.1;
          break;
        case 'QUARTER':
          denominationValue = 0.25;
          break;
        case 'ONE':
          denominationValue = 1;
          break;
        case 'FIVE':
          denominationValue = 5;
          break;
        case 'TEN':
          denominationValue = 10;
          break;
        case 'TWENTY':
          denominationValue = 20;
          break;
        case 'ONE HUNDRED':
          denominationValue = 100;
          break;
      }

      let maxDenominationUsage = Math.min(
        Math.floor(totalChange / denominationValue),
        denominationAmount
      );

      if (maxDenominationUsage > 0) {
        totalChange -= maxDenominationUsage * denominationValue;
        cid[i][1] -= maxDenominationUsage * denominationValue;
        change.push([denomination, maxDenominationUsage * denominationValue]);
      }
    }

    return {
      status:
        totalChange === 0
          ? 'CLOSED'
          : totalChange < 0
          ? 'INSUFFICIENT_FUNDS'
          : 'OPEN',
      change: change,
    };
  }

  let result = calculateChange(price, cash, cid);

  if (result.status === 'CLOSED') {
    changeDue.innerText = 'Status: CLOSED';
  } else if (result.status === 'INSUFFICIENT_FUNDS') {
    changeDue.innerText = 'Status: INSUFFICIENT_FUNDS';
  } else {
    let changeString = result.change
      .map((item) => item[0] + ': $' + item[1])
      .join(', ');
    changeDue.innerText = 'Status: OPEN ' + changeString;
  }
});
