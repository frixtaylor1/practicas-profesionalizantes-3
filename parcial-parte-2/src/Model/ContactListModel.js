import { ContactHandler } from "./ContactHandler.js";

class ContactListModel {
  constructor() {
    this.contactHandler = new ContactHandler();
  }

  getContactById(index) {
    const contacts = this.contactHandler.getContacts();
    if (index >= 0 && index < contacts.length) {
      return JSON.parse(contacts[index]);
    }
    return null;
  }
}

export { ContactListModel };