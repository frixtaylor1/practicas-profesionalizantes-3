import { ContactFormModel } from "../../Model/ContactFormModel.js";
import { ContactFormController } from "../../Controller/ContactFormController.js";

import { InputForm } from "../Input/InputForm.js";
import { ButtonForm } from "../Button/ButtonForm.js";
import { SelectorForm } from "../Selector/SelectorForm.js";

class ContactForm extends HTMLElement {
  constructor() {
    super();
    this.contactFormTitle             = document.createElement('h2');
    this.contactFormTitle.innerText   = 'Create Contact';
    this.contactFormTitle.style.color = '#82aeb8';

    this.nameInput      = new InputForm('Name', 'text', true);
    this.surnameInput   = new InputForm('Surname', 'text', true);
    this.telephoneInput = new InputForm('Telephone', 'text', true);
    this.select         = new SelectorForm(['family', 'friend', 'services', 'study']);
    this.buttonAdd      = new ButtonForm('Add Contact');

    this.container = document.createElement('div');
    this.container.classList.add('form');

    this.container.appendChild(this.contactFormTitle);
    this.container.appendChild(this.nameInput);
    this.container.appendChild(document.createElement('br'));
    this.container.appendChild(this.surnameInput);
    this.container.appendChild(document.createElement('br'));
    this.container.appendChild(this.telephoneInput);
    this.container.appendChild(document.createElement('br'));
    this.container.appendChild(this.select);
    this.container.appendChild(document.createElement('br'));
    this.container.appendChild(this.buttonAdd);
    this.container.appendChild(document.createElement('br'));

    this.controller = new ContactFormController(this, new ContactFormModel());

    this.render();
  }

  render() {
    this.appendChild(this.container);
  }

  connectedCallback() {
    this.controller.enabled();
  }

  disconnectedCallback() {
    this.controller.disable();
  }

  getNameInput() {
    return this.nameInput.getValue();
  }

  getSurnameInput() {
    return this.surnameInput.getValue();
  }

  getTelephoneInput() {
    return this.telephoneInput.getValue();
  }

  getCategory() {
    return this.select;
  }

  getButtonAdd() {
    return this.buttonAdd.getButtonInstance();
  }
}
customElements.define('x-contact-list-form', ContactForm);

export { ContactForm };