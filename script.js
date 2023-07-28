//inputMajor
const inputCalculator = document.getElementById("input-calculator");

//borad of the calculator
const calculatorBord = document.getElementById("calculator");
const button = document.getElementById("result");
const bC = document.getElementById("bC");
const header = document.getElementById("header");

//result input
const inpuText = document.getElementById("inpuText");
let valueOfinput = 0;
const arrayData = [];
let answer = 0;

calculatorBord.childNodes.forEach((value) => {
  value.addEventListener("click", clickCalcutalate);
  function clickCalcutalate() {
    valueOfinput = value.innerText;
    inputCalculator.value = valueOfinput;
    arrayData.push(valueOfinput);
    console.log(arrayData);
    value.style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;

    header.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    header.style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;

    switch (arrayData.some((value) => value)) {
      case arrayData.some((value) => value == "+"):
        {
          if (arrayData.length == 3) {
            let outPutPluse = 0;
            outPutPluse = Number(arrayData[0]) + Number(arrayData[2]);
            answer += outPutPluse;
            inpuText.innerHTML = `${answer}`;
            arrayData.splice(0, arrayData.length);
          } else if (arrayData.length == 2 && arrayData.indexOf("+") == 0) {
            outPutPluse = Number(arrayData[1]);
            answer += outPutPluse;
            inpuText.innerHTML = `${answer}`;

            arrayData.splice(0, arrayData.length);
          }
        }
        break;

      case arrayData.some((value) => value == "-"):
        {
          if (arrayData.length == 3) {
            outPutSubtraction = Number(arrayData[0]) - Number(arrayData[2]);
            answer += outPutSubtraction;
            inpuText.innerHTML = `${answer}`;
            arrayData.splice(0, arrayData.length);
          } else if (arrayData.length == 2 && arrayData.indexOf("-") == 0) {
            outPutSubtraction = Number(arrayData[1]);
            answer -= outPutSubtraction;
            inpuText.innerHTML = `${answer}`;
            arrayData.splice(0, arrayData.length);
          }
        }

        break;

      case arrayData.some((value) => value == "/"):
        {
          if (arrayData.length == 3) {
            outPutDivision = Number(arrayData[0]) / Number(arrayData[2]);
            answer += outPutDivision;
            inpuText.innerHTML = `${answer}`;
            arrayData.splice(0, arrayData.length);
          } else if (arrayData.length == 2 && arrayData.indexOf("/") == 0) {
            outPutDivision = Number(arrayData[1]);
            answer /= outPutDivision;
            inpuText.innerHTML = `${answer}`;
            arrayData.splice(0, arrayData.length);
          }
        }
        break;
      case arrayData.some((value) => value == "*"):
        {
          if (arrayData.length == 3) {
            Multiplication = Number(arrayData[0]) * Number(arrayData[2]);
            answer += Multiplication;
            inpuText.innerHTML = `${answer}`;
            arrayData.splice(0, arrayData.length);
          } else if (arrayData.length == 2 && arrayData.indexOf("*") == 0) {
            Multiplication = Number(arrayData[1]);
            answer *= Multiplication;
            inpuText.innerHTML = `${answer}`;
            arrayData.splice(0, arrayData.length);
          }
        }
        break;
    }
  }
});

// show rsulet
button.addEventListener("click", function () {
  inputCalculator.value = answer;
});

//clear input and array
bC.addEventListener("click", function () {
  inputCalculator.value = 0;
  arrayData.splice(0, arrayData.length);
  inpuText.innerHTML = 0;
});
