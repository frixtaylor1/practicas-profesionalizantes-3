class ButtonStateModel {
    constructor() {
        this.value = 0;
    }

    increment() {
        this.value = this.value + 1;
    }

    read() {
        return this.value;
    }
}

class ButtonCustomModel {
    constructor() {
        this.value = 0;
        this.redValueColor = 255;
    }

    increment() {
        (this.value < 254) ? this.value += 2 : null;
    }

    read() {
        return this.value;
    }

    readRedColor() {
        return this.redValueColor--;
    }
}

class ButtonStateController {
    constructor(model, view) {
        this.innerModel = model;
        this.innerView = view;
    }

    init() {
        this.innerView.setValue(this.innerModel.read());
    }

    onclick() {
        this.innerModel.increment();
        this.innerView.setValue(this.innerModel.read());
        this.innerView.setColor(this.innerModel.readRedColor())
    }
}

class ButtonStateView extends HTMLElement {
    constructor(buttonModelReference) {
        super();

        this.innerModel = buttonModelReference;
        this.innerController = new ButtonStateController(this.innerModel, this);

        this.customButton = document.createElement('button');
    }

    render() {
        this.customButton.style = "background-color: rgb(255, 0, 0);";
        this.appendChild(this.customButton);
    }

    connectedCallback() {
        this.render()
        this.customButton.onclick = () => this.innerController.onclick();
        this.innerController.init();
    }

    setValue(value) {
        this.customButton.innerText = value.toString();
    }

    setColor(value) {
        this.customButton.style = `background-color: rgb(${value}, 0, 0)`;
    }
}

customElements.define('x-button', ButtonStateView);

function main() {
    let testButton = new ButtonStateView(new ButtonCustomModel());
    document.body.appendChild(testButton);
}

window.onload = main;
