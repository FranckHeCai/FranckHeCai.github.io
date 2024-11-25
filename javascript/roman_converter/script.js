const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const convertForm = document.getElementById("convert-form");
const outputNumber = document.getElementById("output");
const outputDiv = document.getElementById("output-div");


const convertNumber = (number) => {
  const conversion = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  conversion.forEach(({value, symbol})=>{
    while(number >= value){
      number-= value;
      outputNumber.innerText += symbol;
    }
  })
  outputDiv.classList.remove("hidden");
}

const checkInput = (number, string) =>{
  let errorText;
  if(number <=0 ){
    errorText= "Please enter a number greater than or equal to 1";
  } else if(number >= 4000){
    errorText= "Please enter a number less than or equal to 3999";
  } else if(!string || string.match(/[e.]/g)){
    errorText= "Please enter a valid number";
  } else {
    return true;
  }

  outputNumber.innerText = errorText;
  outputDiv.classList.add("error");
  outputDiv.classList.remove("hidden");
}

const clearOutput = ()=>{
  outputNumber.innerText ="";
}

const showResult = () =>{
  const int = parseInt(inputNumber.value,10);
  clearOutput();
  outputDiv.classList.add("hidden");
  outputDiv.classList.remove("error");
  if(checkInput(int, inputNumber.value)){
    convertNumber(int);
  }
}

convertBtn.addEventListener("click", ()=>{
  showResult();
})

convertForm.addEventListener("submit", e => {
    e.preventDefault();
    showResult();
  }
);