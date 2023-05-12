
function createButton(value, typeList) {
  let button = document.createElement('button');
  for(idx = 0; idx < typeList.length; idx++) {
    button.classList.add(typeList[idx]);
  }
  button.textContent = value;
  button.value = value;
  return button;
}

function createNumbers() {
  let listOfButtons = [];
  
  for(i = 0; i <= 9; i++) {
    listOfButtons[i] = createButton(i.toString(), ['number', 'btt']);
  }
  return listOfButtons;
}

function createSeparators() {
  let listOfSeparators = [];

  for(i = 0; i < 5; i++) {
    listOfSeparators[i] = document.createElement('br');
  }
  return listOfSeparators;
}

function createOperators() {
  let listOfOperators = [];
  let operators = ['+', '-', '*', '/'];
  for(i = 0; i < 4; i++) {
    listOfOperators[i] = createButton(operators[i], ['operator', 'btt']);
  }
  return listOfOperators;
}

function createDisplay() {
  let display = document.createElement('input');
  display.disabled = true;
  display.classList.add('display');
  return display;
}

function createCalculator() {
  let calculator = document.createElement('div');
  calculator.classList.add("calculator");
  return calculator;
}

function createButtonClear() {
  let button = document.createElement('button');
  button.classList.add('clear');
  button.innerText = 'Borrar';
  return button;
}

function createButtonResult() {
  let button = document.createElement('button');
  button.classList.add()
}

function displayValue(display, value) {
  display.value += value.value;
}

function displayResult(display) {
  if(display.value != '')
    display.value = eval(display.value);
}

function displayClear(display) {
  display.value = "";
}

function run() {
  let listOfNumbers = createNumbers();
  let listOfSeparators = createSeparators();
  let listOfOperators = createOperators();

  let calculator = createCalculator();

  let buttonClear = createButtonClear();
  let buttonEqual = createButton('=', ['equal']);
  let buttonDot = createButton('.', ['btt', 'number']);
  let display = createDisplay(); 

  calculator.appendChild(display);
  calculator.appendChild(listOfSeparators[0]);
  let startingRowValues = [7, 4, 1, 0]; 
  for(i = 0; i < 3; i++) {
    calculator.appendChild(listOfSeparators[i]);
    for(j = 0; j < 3; j++) {
      calculator.appendChild(listOfNumbers[(startingRowValues[i] + j)]);
      calculator.appendChild(listOfOperators[i]);
    }
  }
  calculator.appendChild(listOfNumbers[0]);
  calculator.appendChild(buttonDot);
  calculator.appendChild(buttonEqual);
  calculator.appendChild(listOfOperators[3]);
  calculator.appendChild(buttonClear);

  let listOfButtonsOperandsAndOperators = listOfNumbers.concat(listOfOperators);
  listOfButtonsOperandsAndOperators.push(buttonDot);  

  listOfButtonsOperandsAndOperators.forEach(button => { 
    button.addEventListener('click', function() {
      displayValue(display, button);
    });
  });

  buttonEqual.addEventListener('click', function() { 
    displayResult(display);
  });

  buttonClear.addEventListener('click', function() {
    displayClear(display);
  });

  document.body.appendChild(calculator);
}

function startApplication() {
  run();
}

window.addEventListener( 'load', startApplication );