const inputText = document.getElementById("text-input");
const resultDiv = document.getElementById("result");
const checkButton = document.getElementById("check-btn");

const isPalindrome = input => {
  const originalInput = input;

  if(input===""){
    alert("Please input a value");
    return;
  }

  resultDiv.innerHTML ="";

  let cleanText = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let resultMsg = `<i><strong>${originalInput}</strong></i> <span class="${cleanText === cleanText.split('').reverse().join('')? "is" : "isnot" }">${cleanText === cleanText.split('').reverse().join('')? "is" : "is not" }</span> a palindrome`;

  const tag = document.createElement("p");
  tag.innerHTML= resultMsg;
  resultDiv.appendChild(tag);
  resultDiv.classList.remove("hidden");

}

checkButton.addEventListener("click", () =>{
  isPalindrome(inputText.value);
  inputText.value = "";
});

inputText.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    isPalindrome(inputText.value);
    inputText.value = "";
  }
});