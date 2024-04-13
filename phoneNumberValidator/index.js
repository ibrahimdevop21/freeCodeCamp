//! still nt working
const regex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/;
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
/**
 * Validate function to check if a given phone number is a valid US number.
 *
 * @returns {void}
 */
const validate = () => {
  let inputValue = document.getElementById('user-input').value; // Get user input
  const resultEl = document.getElementById('results-div'); // Get results div
  const validPhoneNumber = regex.test(inputValue); // Test if input is a valid US number

  if (inputValue === '') {
    // If input value is empty, alert user
    alert('Please provide a phone number.');
  } else if (validPhoneNumber) {
    // If input is a valid US number
    resultEl.innerHTML += `<span class="valid">Valid US number: ${inputValue}</span><br>`;
    inputValue = ''; // Clear input field
  } else {
    // If input is an invalid US number
    resultEl.innerHTML += `<span class="invalid">Invalid US number: ${inputValue}</span><br>`;
    inputValue = ''; // Clear input field
  }
};

checkBtn.addEventListener('click', validate);
clearBtn.addEventListener('click', () => {
  document.getElementById('user-input').value = '';
  document.getElementById('results-div').innerHTML = '';
});
