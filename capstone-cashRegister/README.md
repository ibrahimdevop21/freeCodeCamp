# Cash Register App

## Objective
Build an app that functions similarly to [this example](https://cash-register.freecodecamp.rocks), where customers can receive change based on the price of an item, the amount of cash provided, and the cash in the drawer.

## User Stories
- An input element with an id of "cash" should be present.
- A div element with an id of "change-due" should be present.
- A button element with an id of "purchase-btn" should be present.
- When the value in the #cash element is less than the price, an alert should appear with the text "Customer does not have enough money to purchase the item".
- When the value in the #cash element is equal to the price, the value in the #change-due element should be "No change due - customer paid with exact cash".
- When the price is $19.5, the value in the #cash element is $20, and cid is provided, the #purchase-btn should display "Status: OPEN QUARTER: $0.5".
- When the price is $3.26, the value in the #cash element is $100, and cid is provided, the #purchase-btn should display "Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04".
- When the price is $19.5, the value in the #cash element is $20, and cid has insufficient funds, the #purchase-btn should display "Status: INSUFFICIENT_FUNDS".
- When the price is $19.5, the value in the #cash element is $20, and cid has insufficient denominations, the #purchase-btn should display "Status: INSUFFICIENT_FUNDS".
- When the price is $19.5, the value in the #cash element is $20, and cid has exact change, the #purchase-btn should display "Status: CLOSED PENNY: $0.5".

## Instructions
1. Clone the repository.
2. Open `index.html` in your web browser.
3. Enter the price of the item and the amount of cash provided.
4. Click the "Purchase" button to see the change due.

## Testing
- The app should pass all provided tests.

## Notes
- Ensure the app handles various scenarios and provides appropriate messages to the user.
- Style the app to your preference for a better user experience.
