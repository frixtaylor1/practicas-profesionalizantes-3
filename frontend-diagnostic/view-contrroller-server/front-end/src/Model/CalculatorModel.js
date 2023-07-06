class CalculatorModel {
  constructor() {

  }
  async evaluateExpression(data) {
    const url = `http://localhost:3000/modeleval?expression=${encodeURIComponent(this.innerView.display.value)}`;
    fetch(url)
    .then(response => response.text())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
}


export { CalculatorModel }