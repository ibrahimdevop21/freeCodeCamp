function convertToRoman() {
  let userInput = parseInt(document.getElementById('number').value);
  const userOutput = document.getElementById('output');
  let roman = '';
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  if (isNaN(userInput)) {
    userOutput.textContent = 'Please enter a valid number';
  } else if (userInput <= 0) {
    userOutput.textContent = 'Please enter a number greater than or equal to 1';
  } else if (userInput >= 4000) {
    userOutput.textContent = 'Please enter a number less than or equal to 3999';
  } else {
    for (let i = 0; i < romanNumerals.length; i++) {
      while (userInput >= romanNumerals[i].value) {
        roman += romanNumerals[i].numeral;
        userInput -= romanNumerals[i].value;
      }
      // Add a debugging statement here
      console.log('Roman after iteration', roman);
    }
    userOutput.textContent = roman;
  }
}

const convert = document.getElementById('convert-btn');

convert.addEventListener('click', convertToRoman);
