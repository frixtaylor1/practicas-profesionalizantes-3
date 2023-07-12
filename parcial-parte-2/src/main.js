import { ContactForm } from "./View/Form/ContactForm.js";
import { ContactList } from "./View/Form/ContactList.js";

function main() {
	const container = document.createElement('div');
	container.classList.add('container');

	const contactForm = new ContactForm();
	container.appendChild(contactForm);
	container.appendChild(new ContactList());

	document.body.appendChild(container);
}

window.onload = main;
