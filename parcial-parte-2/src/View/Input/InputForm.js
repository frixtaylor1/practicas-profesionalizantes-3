class InputForm extends HTMLElement {
  constructor(placeHolder, type, required) {
    super();
    this.input = document.createElement('input');

    this.input.placeholder  = placeHolder;
    this.input.type         = type;
    this.input.required     = required;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
  }

  getValue() {
    return this.input.value;
  }

  setValue(value) {
    this.input.value = value;
  }

  render() {
    this.appendChild(this.input);
  }
}
customElements.define('x-input', InputForm);

export { InputForm };