export class DocumentSelectionExample {
    constructor(
        configuration = {}
    ) {
        this.numbers = [1, 3, 4, 7, 9];
        this.init();
    }

    init() {
        this.selection();
    }

    selection() {
        document.querySelector('#result').innerText = this.numbers.map(x => x * x);
    }
}