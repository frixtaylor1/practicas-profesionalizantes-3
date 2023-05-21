import { View } from "./View/calculatorView.js";
import { Controller } from "./Controller/calculatorController.js";

class calculator {
  constructor() {
    this.view = new View();
    this.Controller = new Controller(this.view);
  }
}

function startApplication() {
  let myCalculator = new calculator();

  document.body.appendChild(myCalculator.view.container);
}

window.addEventListener('load', startApplication);