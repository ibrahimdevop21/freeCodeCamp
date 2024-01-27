const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");
const textInput = document.getElementById("text-input");

function isPalindrome() {
  if (textInput.value === "") {
    alert("Please input a value");
    return "";
  }

  const cleanedInput = removeSpecialCharacters(textInput.value.toLowerCase());
  const reversedInput = cleanedInput.split("").reverse().join("");

  return { cleanedInput, reversedInput };
}

function removeSpecialCharacters(str) {
  // Remove non-alphanumeric characters
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    const { cleanedInput, reversedInput } = isPalindrome();

    if (cleanedInput === reversedInput) {
      resultText.textContent = `${textInput.value} is a palindrome`;
    } else {
      resultText.textContent = `${textInput.value} is not a palindrome`;
    }
  }
}

function handleCheckBtnClick() {
  const { cleanedInput, reversedInput } = isPalindrome();

  if (cleanedInput === reversedInput) {
    resultText.textContent = `${textInput.value} is a palindrome`;
  } else {
    resultText.textContent = `${textInput.value} is not a palindrome`;
  }
}

checkBtn.addEventListener("click", handleCheckBtnClick);
textInput.addEventListener("keydown", handleKeyPress);

// const checkBtn = document.getElementById("check-btn");
// const resultText = document.getElementById("result");
// const textInput = document.getElementById("text-input");
// let textArray;

// function removeSpacesAndPunctuation(str) {
//   return str.replace(/[^\w]/g, "");
// }

// function isPalindrome() {
//   if (textInput.value === "") {
//     alert("Please input a value");
//     return "";
//   }

//   const cleanedInput = removeSpacesAndPunctuation(
//     textInput.value.toLowerCase()
//   );
//   textArray = cleanedInput
//     .split("")
//     .map((char) => char)
//     .reverse()
//     .join("");

//   console.log(textArray);
//   return cleanedInput;
// }

// function handleKeyPress(event) {
//   if (event.key === "Enter") {
//     const cleanedInput = isPalindrome();

//     if (cleanedInput === textArray) {
//       resultText.textContent = `${textInput.value} is a palindrome`;
//     } else {
//       resultText.textContent = `${textInput.value} is not a palindrome`;
//     }
//   }
// }

// function handleCheckBtnClick() {
//   const cleanedInput = isPalindrome();

//   if (cleanedInput === textArray) {
//     resultText.textContent = `${textInput.value} is a palindrome`;
//   } else {
//     resultText.textContent = `${textInput.value} is not a palindrome`;
//   }
// }

// checkBtn.addEventListener("click", handleCheckBtnClick);
// textInput.addEventListener("keydown", handleKeyPress);
