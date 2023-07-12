class SelectorForm extends HTMLElement {
    constructor(options) {
      super();
      this.options  = options;
      this.selector = document.createElement('select');
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.options.forEach((option) => {
        const optionElement       = document.createElement('option');
        optionElement.value       = option;
        optionElement.textContent = option;
        this.selector.appendChild(optionElement);
      });
  
      this.appendChild(this.selector);
    }
  
    getSelectedValue() {
      return this.selector.value;
    }

    setValue(value) {
      this.selector.value = value;
    }
  }
  customElements.define('x-selector', SelectorForm);
  
  export { SelectorForm };