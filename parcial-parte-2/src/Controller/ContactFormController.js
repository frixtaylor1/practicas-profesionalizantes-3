class ContactFormController {
  constructor(contactFormViewReference, contactFormModelReference) {
    this.contactFormView  = contactFormViewReference;
    this.contactFormModel = contactFormModelReference;
  }

  enabled() {
    this.contactFormView.getButtonAdd().onclick = () => {
      this.addContact();
      window.dispatchEvent(new Event('<<x-contact-added>>'));
    };
  }

  disable() {
    this.contactFormView.getButtonAdd().onclick = null;
  }

  addContact() {
    const contact = {
      id: this.contactFormModel.contactHandler.generateUniqueId(),
      name: this.contactFormView.getNameInput(),
      surname: this.contactFormView.getSurnameInput(),
      telephone: this.contactFormView.getTelephoneInput(),
      category: this.contactFormView.getCategory().getSelectedValue(),
    };
    this.contactFormModel.pushContact(JSON.stringify(contact));
  }
}

export { ContactFormController };
