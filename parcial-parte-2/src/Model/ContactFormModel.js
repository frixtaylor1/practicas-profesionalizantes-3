import { ContactHandler } from "./ContactHandler.js";

class ContactFormModel {
  constructor() {
    this.contactHandler = new ContactHandler();
  }

  pushContact(contact) {
    let contacts = this.contactHandler.getContacts();
    contacts.push(contact);
    this.contactHandler.saveContacts(contacts);
  }
}

export { ContactFormModel };