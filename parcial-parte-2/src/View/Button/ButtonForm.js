class ButtonForm extends HTMLElement {
  constructor(text, nameClass = null) {
    super();
    this.text       = text;
    this.nameClass  = nameClass;
    this.button     = document.createElement('button');
    if(nameClass != null) {
      this.button.classList.add(this.nameClass);
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.button.textContent = this.text;
    this.appendChild(this.button);
  }

  getButtonInstance() {
    return this.button;
  }
}
customElements.define('x-button', ButtonForm);

export { ButtonForm };