class View {
    constructor() {
      this.display = document.createElement('input');
      this.display.type = 'text';
      this.display.setAttribute('disabled', '');
      this.display.value = '';
      this.display.classList.add('display');
  
      this.button0 = document.createElement('button');
      this.button0.innerText = '0';
      this.button0.classList.add('number');
  
      this.button1 = document.createElement('button');
      this.button1.innerText = '1';
      this.button1.classList.add('number');
  
      this.button2 = document.createElement('button');
      this.button2.innerText = '2';
      this.button2.classList.add('number');
  
      this.button3 = document.createElement('button');
      this.button3.innerText = '3';
      this.button3.classList.add('number');
  
      this.button4 = document.createElement('button');
      this.button4.innerText = '4';
      this.button4.classList.add('number');
  
      this.button5 = document.createElement('button');
      this.button5.innerText = '5';
      this.button5.classList.add('number');
  
      this.button6 = document.createElement('button');
      this.button6.innerText = '6';
      this.button6.classList.add('number');
  
      this.button7 = document.createElement('button');
      this.button7.innerText = '7';
      this.button7.classList.add('number');
  
      this.button8 = document.createElement('button');
      this.button8.innerText = '8';
      this.button8.classList.add('number');
  
      this.button9 = document.createElement('button');
      this.button9.innerText = '9';
      this.button9.classList.add('number');
  
      this.buttonPlus = document.createElement('button');
      this.buttonPlus.innerText = '+';
      this.buttonPlus.classList.add('operator');
  
      this.buttonMinus = document.createElement('button');
      this.buttonMinus.innerText = '-';
      this.buttonMinus.classList.add('operator');
  
      this.buttonDivide = document.createElement('button');
      this.buttonDivide.innerText = '/';
      this.buttonDivide.classList.add('operator');
  
      this.buttonMultiply = document.createElement('button');
      this.buttonMultiply.innerText = '*';
      this.buttonMultiply.classList.add('operator');
  
      this.buttonDot = document.createElement('button');
      this.buttonDot.innerText = '.';
      this.buttonDot.classList.add('number');
  
      this.buttonCalculate = document.createElement('button');
      this.buttonCalculate.innerText = '=';
      this.buttonCalculate.classList.add('equal');
  
      this.buttonClear = document.createElement('button');
      this.buttonClear.innerText = "Borrar";
      this.buttonClear.classList.add('clear');
  
      //Container
      this.container = document.createElement('div');
      this.container.classList.add("calculator");
      this.container.appendChild(this.display);
      this.container.appendChild(document.createElement('br'));
      this.container.appendChild(this.button7);
      this.container.appendChild(this.button8);
      this.container.appendChild(this.button9);
      this.container.appendChild(this.buttonPlus);
      this.container.appendChild(document.createElement('br'));
      this.container.appendChild(this.button4);
      this.container.appendChild(this.button5);
      this.container.appendChild(this.button6);
      this.container.appendChild(this.buttonMinus);
      this.container.appendChild(document.createElement('br'));
      this.container.appendChild(this.button1);
      this.container.appendChild(this.button2);
      this.container.appendChild(this.button3);
      this.container.appendChild(this.buttonMultiply);
      this.container.appendChild(document.createElement('br'));
      this.container.appendChild(this.button0);
      this.container.appendChild(this.buttonDot);
      this.container.appendChild(this.buttonCalculate);
      this.container.appendChild(this.buttonDivide);
      this.container.appendChild(document.createElement('br'));
      this.container.appendChild(this.buttonClear);
    }
  }
export{ View };