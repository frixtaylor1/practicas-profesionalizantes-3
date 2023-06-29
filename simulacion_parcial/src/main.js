class Priorityselect extends HTMLElement {
  constructor() {
    super();
    this.select = document.createElement('select');

    this.priorityLowest   = document.createElement('option');
    this.priorityMedium   = document.createElement('option');
    this.priorityHighest  = document.createElement('option');

    this.priorityHighest.value  = 'highest';
    this.priorityMedium.value   = 'medium';
    this.priorityLowest.value   = 'lowest';

    this.priorityHighest.innerText = 'Highest';
    this.priorityMedium.innerText = 'Medium';
    this.priorityLowest.innerText = 'Lowest';

    this.select.appendChild(this.priorityHighest);
    this.select.appendChild(this.priorityMedium);
    this.select.appendChild(this.priorityLowest);
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.deleteRendering();
  }

  render() {
    this.appendChild(this.select);
  }

  deleteRendering() {
    this.removeChild(this.priorityHighest);
    this.removeChild(this.priorityMedium);
    this.removeChild(this.priorityLowest);
  }
}
customElements.define('x-priority-select', Priorityselect);

class Typeselect extends HTMLElement {
  constructor() {
    super();
    this.select = document.createElement('select');
    
    this.newRequirement  = document.createElement('option');
    this.failure         = document.createElement('option');

    this.newRequirement.value  = 'new_requirement';
    this.failure.value   = 'failure';

    this.newRequirement.innerText = 'New Requirement';
    this.failure.innerText = 'failure';

    this.select.appendChild(this.newRequirement);
    this.select.appendChild(this.failure);
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.deleteRendering();
  }

  render() {
    this.appendChild(this.select);
  }

  deleteRendering() {
    this.removeChild(this.newRequirement);
    this.removeChild(this.failure);
  }
}
customElements.define('x-type-select', Typeselect);

class MessageBox extends HTMLElement {
  constructor() {
    super();
    this.textArea = document.createElement('textarea');
  }
  connectedCallback() {
    this.appendChild(this.textArea);
  }
}
customElements.define('x-textarea', MessageBox);

class Button extends HTMLElement {
  constructor(text) {
    super();
    this.button = document.createElement('button');
    this.button.innerText = text;    
  }

  getInstance() {
    return this.button;
  }

  connectedCallback() {
    this.appendChild(this.button);
  }
}
customElements.define('x-button', Button);

class TicketForm extends HTMLElement {
  constructor() {
    super();
    this.typeselect       = new Typeselect();
    this.priorityselect   = new Priorityselect();
    this.message          = new MessageBox();
    this.addButton        = new Button('Agregar');
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    
  }

  render() {
    this.appendChild(this.typeselect);
    this.appendChild(this.priorityselect);
    this.appendChild(this.message);
    this.appendChild(this.addButton);
  }

  deleteRendering() {

  }
}
customElements.define('x-form', TicketForm);


class TicketModel {
  constructor() {
  }

  addTicket(ticket) {
    let count = localStorage.length;
    localStorage.setItem(`task_${count++}`, JSON.stringify({ priority: ticket.priorityselect.select.value, type: ticket.typeselect.select.value, message: ticket.message.textArea.value }));
  }
}

class FormController {
  constructor(viewReference, modelReference) {
    this.model = modelReference;
    this.view = viewReference;

    this.setCallbacks();
  }

  setCallbacks() {
    this.view.addButton.getInstance().onclick = () => { this.onButtonAddTicketClick(); };
  }

  onButtonAddTicketClick() {
    this.model.addTicket(this.view);
    window.dispatchEvent(new CustomEvent('button-add-event'));
  }

  enabled() {

  }

  disabled() {

  }
}

class TicketApp extends HTMLElement {
  constructor() {
    super();
    this.formView   = new TicketForm();
    this.formModel  = new TicketModel(); 
    this.controller = new FormController(this.formView, this.formModel);
  }

  connectedCallback() {
    this.appendChild(this.formView);
    let style = document.createElement('style');
    style.innerHTML = `
    /* Estilos para el formulario */
      form {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      
      select,
      textarea,
      button {
        display: block;
        width: 70%;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 14px;
      }

      button {
        background-color: #4CAF50;
        color: #fff;
        border: none;
        cursor: pointer;
      }

      button:hover {
        background-color: #45a049;
      }
    `;
    
      this.appendChild(style);
  }

  disconnectedCallback() {
    this.removeChild(this.formView);
  }
}
customElements.define('x-ticket-app', TicketApp);

class TicketContent extends HTMLElement {
  constructor(ticketTypeText, messageText, priority) {
    super();
    this.container  = document.createElement('div');
    this.ticketType = document.createElement('p');
    this.message    = document.createElement('p');
    this.priority   = document.createElement('p');
    this.priority.classList.add('priority');



    this.ticketType.innerText = `type: ${ticketTypeText}`;
    this.message.innerText    = `message: ${messageText}`;
    this.priority.innerText   = priority;

    this.container.appendChild(this.ticketType);
    this.container.appendChild(this.message);
    this.container.appendChild(this.priority);

    let color = this.priority.textContent === 'highest' ? 'red' : this.priority.textContent === 'lowest' ? 'green' : 'Yellow';

    let style = document.createElement('style');
    style.innerHTML = `
      .priority {
        background-color: ${color};
      }
    `;
    this.appendChild(style);

  }
  connectedCallback() {
    this.appendChild(this.container);
  }
}
customElements.define('x-ticket-content', TicketContent);

function onAddTicketToView() {
  let data = localStorage.getItem(`task_${localStorage.length - 1}`);
  let ticket = JSON.parse(data);

  document.body.appendChild(new TicketContent(ticket.priority, ticket.message, ticket.priority));
}

function main() {
  let ticketApp = new TicketApp();
  let container = document.createElement('div');
  container.appendChild(ticketApp);
  
  window.addEventListener('button-add-event', onAddTicketToView);

  document.body.appendChild(container);
}

window.addEventListener('load', main);