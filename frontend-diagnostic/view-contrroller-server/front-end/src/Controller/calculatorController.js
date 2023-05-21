class Controller {
  constructor(viewReference) {
    this.innerView = viewReference;

    this.innerView.button0.addEventListener('click', () => { this.onButton0Click() });
    this.innerView.button1.addEventListener('click', () => { this.onButton1Click() });
    this.innerView.button2.addEventListener('click', () => { this.onButton2Click() });
    this.innerView.button3.addEventListener('click', () => { this.onButton3Click() });
    this.innerView.button4.addEventListener('click', () => { this.onButton4Click() });
    this.innerView.button5.addEventListener('click', () => { this.onButton5Click() });
    this.innerView.button6.addEventListener('click', () => { this.onButton6Click() });
    this.innerView.button7.addEventListener('click', () => { this.onButton7Click() });
    this.innerView.button8.addEventListener('click', () => { this.onButton8Click() });
    this.innerView.button9.addEventListener('click', () => { this.onButton9Click() });
    this.innerView.buttonPlus.addEventListener('click', () => { this.onButtonPlusClick() });
    this.innerView.buttonMinus.addEventListener('click', () => { this.onButtonMinusClick() });
    this.innerView.buttonMultiply.addEventListener('click', () => { this.onButtonMultiplyClick() });
    this.innerView.buttonDivide.addEventListener('click', () => { this.onButtonDivideClick() });
    this.innerView.buttonDot.addEventListener('click', () => { this.onButtonDotClick() });
    this.innerView.buttonCalculate.addEventListener('click', () => { this.onButtonCalculateClick() });
    this.innerView.buttonClear.addEventListener('click', () => { this.onButtonClearClick() });
  }

  onButton0Click() {
    this.innerView.display.value += '0';
  }

  onButton1Click() {
    this.innerView.display.value += '1';
  }

  onButton2Click() {
    this.innerView.display.value += '2';
  }

  onButton3Click() {
    this.innerView.display.value += '3';
  }

  onButton4Click() {
    this.innerView.display.value += '4';
  }

  onButton5Click() {
    this.innerView.display.value += '5';
  }

  onButton6Click() {
    this.innerView.display.value += '6';
  }

  onButton7Click() {
    this.innerView.display.value += '7';
  }

  onButton8Click() {
    this.innerView.display.value += '8';
  }

  onButton9Click() {
    this.innerView.display.value += '9';
  }

  onButtonPlusClick() {
    this.innerView.display.value += '+';
  }

  onButtonMinusClick() {
    this.innerView.display.value += '-';
  }

  onButtonMultiplyClick() {
    this.innerView.display.value += '*';
  }

  onButtonDivideClick() {
    this.innerView.display.value += '/';
  }

  onButtonDotClick() {
    this.innerView.display.value += '.';
  }

  onButtonClearClick() {
    this.innerView.display.value = "";
  }

  onButtonCalculateClick() {
    if(this.innerView.display.value != "") {
      const url = `http://localhost:3000/modeleval?expression=${encodeURIComponent(this.innerView.display.value)}`;
      fetch(url)
      .then(response => response.text())
      .then(result => {
        this.innerView.display.value = result;
        console.log('El resultado es:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
}

export{ Controller };