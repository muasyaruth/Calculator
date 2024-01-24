class Calculator {
    constructor() {
        this.inputField = document.getElementById('input');
    }

    appendToInput(value) {
        this.inputField.value += value;
    }

    calculateResult() {
        try {
            this.inputField.value = eval(this.inputField.value);
        } catch (error) {
            this.inputField.value = 'Error';
        }
    }

    clearInput() {
        this.inputField.value = '';
    }
}

const calculator = new Calculator();