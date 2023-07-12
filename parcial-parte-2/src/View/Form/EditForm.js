import { InputForm } from "../Input/InputForm.js";
import { SelectorForm } from "../Selector/SelectorForm.js";
import { ButtonForm } from "../Button/ButtonForm.js";

class EditForm extends HTMLElement {
  constructor() {
    super();
    this.__contact = {};
    this.editFormTitle            = document.createElement('h2');
    this.editFormTitle.innerText  = 'Edit Contact';

    this.container = document.createElement('div');
    this.container.classList.add('edit-form');

    this.nameInput            = new InputForm('Name', 'text', true);
    this.surnameInput         = new InputForm('Surname', 'text', true);
    this.telephoneInput       = new InputForm('Telephone', 'text', true);
    this.select               = new SelectorForm(['family', 'friend', 'services', 'study']);
    this.buttonSaveChanges    = new ButtonForm('Save changes');
    this.buttonCancelChanges  = new ButtonForm('Cancel');
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.removeChild(this.container);
  }

  populateFormForEdit(contact, index) {
    this.__contact        = contact;
    this.__contact.id     = contact.id;
    this.__contact.index  = index;
    this.nameInput.setValue(this.__contact.name);
    this.surnameInput.setValue(this.__contact.surname);
    this.telephoneInput.setValue(this.__contact.telephone);
    this.select.setValue(this.__contact.category);
  }

  render() {
    this.container.appendChild(this.editFormTitle);
    this.container.appendChild(this.nameInput);
    this.container.appendChild(this.surnameInput);
    this.container.appendChild(this.telephoneInput);
    this.container.appendChild(this.select);
    this.container.appendChild(this.buttonSaveChanges);
    this.container.appendChild(this.buttonCancelChanges);

    this.appendChild(this.container);
  }

  getInputNameInstance() {
    return this.nameInput;
  }

  getInputSurnameInstance() {
    return this.surnameInput;
  }

  getInputTelephoneInstance() {
    return this.telephoneInput;
  }

  getCategory() {
    return this.select;
  }

  getButtonSaveChangesInstance() {
    return this.buttonSaveChanges.getButtonInstance();
  }

  getButtonCancel() {
    return this.buttonCancelChanges.getButtonInstance();
  }
}
customElements.define('x-contact-edit-form', EditForm);

export { EditForm };