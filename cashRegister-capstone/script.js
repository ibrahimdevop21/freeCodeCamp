let price = 19.5;
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

document
  .getElementById('purchase-btn')
  .addEventListener('click', handlePurchase);

const currencyUnits = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100],
];

function handlePurchase() {
  let cash = parseFloat(document.getElementById('cash').value);
  let changeDue = cash - price;

  if (cash < price) {
    alert('Customer does not have enough money to purchase the item');
    return;
  }

  if (cash === price) {
    document.getElementById('change-due').innerText =
      'No change due - customer paid with exact cash';
    return;
  }

  let change = calculateChange(changeDue, cid);
  document.getElementById(
    'change-due'
  ).innerText = `Status: ${change.status} ${change.change}`;
}

function calculateChange(changeDue, cid) {
  let changeArray = [];
  let totalCid = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = totalCid.toFixed(2);

  if (parseFloat(totalCid) < changeDue) {
    return { status: 'INSUFFICIENT_FUNDS', change: '' };
  }

  if (parseFloat(totalCid) === changeDue) {
    return { status: 'CLOSED', change: formatChange(cid) };
  }

  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    let unitName = currencyUnits[i][0];
    let unitValue = currencyUnits[i][1];
    let amountInDrawer = cid[i][1];
    let amountToReturn = 0;

    while (changeDue >= unitValue && amountInDrawer >= unitValue) {
      changeDue -= unitValue;
      changeDue = changeDue.toFixed(2);
      amountInDrawer -= unitValue;
      amountToReturn += unitValue;
    }

    if (amountToReturn > 0) {
      changeArray.push([unitName, amountToReturn]);
    }
  }

  if (changeDue > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: '' };
  }

  return { status: 'OPEN', change: formatChange(changeArray) };
}

function formatChange(changeArray) {
  return changeArray.map((unit) => `${unit[0]}: $${unit[1]}`).join(' ');
}
