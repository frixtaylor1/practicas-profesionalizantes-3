import { ButtonForm } from "../View/Button/ButtonForm.js";
import { ContactHandler } from "../Model/ContactHandler.js";

class ContactListController {
  constructor(contactListViewReference, contactListModelReference) {
    this.contactListView  = contactListViewReference;
    this.contactListModel = contactListModelReference;
    this.contactHandler   = new ContactHandler();
  }

  enabled() {
    this.contactListView.addEventListener('<<x-contact-added>>', () => {
      this.contactListView.addContact(this.contactListModel);
    });

    this.contactListView.editForm.getButtonCancel().onclick = () => {
      this.contactListView.hideEditForm();
    };

    this.contactListView.editForm.getButtonSaveChangesInstance().onclick = () => {
      const updatedContact = {
        // Este operador actua de manera tal para mantener el id
        ...this.contactListView.editForm.__contact, 
        name      : this.contactListView.editForm.getInputNameInstance().getValue(),
        surname   : this.contactListView.editForm.getInputSurnameInstance().getValue(),
        telephone : this.contactListView.editForm.getInputTelephoneInstance().getValue(),
        category  : this.contactListView.editForm.getCategory().getSelectedValue(),
      };
      this.updateContact(updatedContact);
    };

    window.addEventListener('<<x-contact-added>>', () => {
      this.displayContacts();
    });

    window.addEventListener('<<x-contact-edit>>', () => {
      this.contactListView.showEditForm();
    });

    this.displayContacts();
  }

  disabled() {
    this.contactListView.removeEventListener('<<x-contact-added>>', null);
  }

  displayContacts() {
    this.contactListView.clearContactList();

    let contacts = this.contactHandler.getContacts();
    contacts.forEach((contact, index) => {
      let parsedContact = JSON.parse(contact);
      let li = document.createElement('li');
      li.textContent = `${parsedContact.name} ${parsedContact.surname} (${parsedContact.telephone}) - ${parsedContact.category}`;

      const editButton = new ButtonForm('Edit', 'button-list');
      editButton.getButtonInstance().addEventListener('click', () => {
        window.dispatchEvent(new Event('<<x-contact-edit>>'));
        this.contactListView.editForm.populateFormForEdit(parsedContact, index);
      });
      li.appendChild(editButton);

      const deleteButton = new ButtonForm('Delete', 'button-list');
      deleteButton.getButtonInstance().addEventListener('click', () => {
        this.deleteContact(parsedContact.id);
      });
      li.appendChild(deleteButton);

      li.setAttribute('data-contact-index', index);
      this.contactListView.list.appendChild(li);
    });
  }

  deleteContact(contactId) {
    const contacts = this.contactHandler.getContacts();
    const updatedContacts = contacts.filter((contact) => {
      const parsedContact = JSON.parse(contact);
      return parsedContact.id.toString() !== contactId.toString();
    });
    this.contactHandler.saveContacts(updatedContacts);
    this.displayContacts();
  }

  updateContact(updatedContact) {
    const contacts = this.contactHandler.getContacts();
    const index = updatedContact.index;
    if (index !== undefined && index >= 0 && index < contacts.length) {
      contacts[index] = JSON.stringify(updatedContact);
      this.contactHandler.saveContacts(contacts);
      this.displayContacts();
      this.contactListView.hideEditForm();
    }
  }
}

export { ContactListController };
