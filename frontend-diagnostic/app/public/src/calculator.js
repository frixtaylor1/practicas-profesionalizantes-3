import { View } from "./View/calculatorView.js";
import { Model } from "./Model/calculatorModel.js";
import { Controller } from "./Controller/calculatorController.js";

class calculator {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.Controller = new Controller(this.view, this.model);
  }
}

function startApplication() {
  let myCalculator = new calculator();

  document.body.appendChild(myCalculator.view.container);
}

window.addEventListener('load', startApplication);