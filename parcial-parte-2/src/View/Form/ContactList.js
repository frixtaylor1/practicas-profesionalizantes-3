import { ContactListController } from "../../Controller/ContactListController.js";
import { ContactListModel } from "../../Model/ContactListModel.js";
import { EditForm } from "./EditForm.js";

class ContactList extends HTMLElement {
  constructor() {
    super();
    this.list     = document.createElement('ul');
    this.editForm = new EditForm();

    this.appendChild(this.list);

    this.controller = new ContactListController(this, new ContactListModel());
  }

  clearContactList() {
    this.list.innerHTML = '';
  }

  connectedCallback() {
    this.controller.enabled();
    window.addEventListener('<<x-contact-edit>>', () => {
      this.showEditForm();
    });
  }

  showEditForm() {
    if (!this.contains(this.editForm)) {
      this.appendChild(this.editForm);
    }
  }

  hideEditForm() {
    if (this.contains(this.editForm)) {
      this.removeChild(this.editForm);
    }
  }
}
customElements.define('x-contact-list', ContactList);

export { ContactList };