class ContactHandler {
  constructor() {
    this.contacts = [];
  }

  saveContacts(contacts) {
    this.contacts = contacts;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  getContacts() {
    const contacts = localStorage.getItem('contacts');
    this.contacts  = contacts ? JSON.parse(contacts) : [];
    return this.contacts;
  }

  generateUniqueId() {
    const lastId = this.contacts.reduce((maxId, contact) => {
      const parsedContact = JSON.parse(contact);
      return parsedContact.id > maxId ? parsedContact.id : maxId;
    }, 0);
    return lastId + 1;
  }
}

export { ContactHandler };
