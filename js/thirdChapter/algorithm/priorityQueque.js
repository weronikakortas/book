class Element {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueque {
    constructor() {
        this.elements = [];
    }

    pushOnQueque(element) {
        let contain = false;
        for (let i in this.elements) {
            if (this.elements[i].priority > element.priority) {
                this.elements.splice(i, 0, element);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.elements.push(element);
        }
    }

    display() {
        for (let i in this.elements) {
            console.log(this.elements[i].value);
        }
    }
}

let priorityQueque = new PriorityQueque();
priorityQueque.pushOnQueque(new Element("Janek", 3));
priorityQueque.pushOnQueque(new Element("Maja", 1));
priorityQueque.pushOnQueque(new Element("Kasia", 3));
priorityQueque.pushOnQueque(new Element("Ola", 1));
priorityQueque.pushOnQueque(new Element("Marcin", 2));
priorityQueque.display();