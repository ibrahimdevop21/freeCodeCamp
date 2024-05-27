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

  const cashInput = document.getElementById('cash')
  const changeDue = document.getElementById('change-due')
  const purchaseBtn = document.getElementById('purchase-btn')
  const changeInDrower = document.getElementById('current-change')

  changeInDrower.innerText = `Change in drawer:
  PENNY: ${cid.0}, NICKEL: ${cid.1}, DIME: ${cid.2}, QUARTER: ${cid.3}, ONE: ${cid.4}, FIVE: ${cid.5}, TEN: ${cid.6}, TWENTY: ${cid.7}, ONE HUNDRED: ${cid.0}
  `