import { RopeNode } from "../../node/RopeNode";

class DoublyLinkedList {
    private head: RopeNode | null;
    private tail: RopeNode | null;

    constructor(head: RopeNode | null = null, tail: RopeNode | null = null) {
        this.head = head;
        this.tail = tail;
    }

    getHead(): RopeNode | null {
        return this.head;
    }

    getTail(): RopeNode | null {
        return this.tail;
    }

    getSize(): number {
        let size: number = 0;

        let current: RopeNode | null = this.head;

        while (current != null) {
            size ++;
            current = current.getNextNode();
        }

        return size;
    }

    pushFront(value: number): void {
        let newNode: RopeNode = new RopeNode(value);

        if (this.head == null) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.setNextNode(this.head);
        this.head.setPreviousNode(newNode);
        this.head = newNode;
    }

    pushBack(value: number): void {
        let newNode: RopeNode = new RopeNode(value);

        if (this.tail == null) {
            this.head = this.tail = newNode;
            return;
        }

        this.tail.setNextNode(newNode);
        newNode.setPreviousNode(this.tail);
        this.tail = newNode;
    }

    popFront(): RopeNode | null {
        if (this.head == null) {
            console.log("The list is empty");
            return null;
        }

        let temp: RopeNode = this.head;
        this.head = this.head.getNextNode()
        
        if (temp == this.tail) {
            this.tail = null;
        }

        return temp;
    }

    //@ts-ignore
    popBack(): RopeNode | null {

    }

    find(value: number): void {
        if (this.head == null) {
            console.log("The Value is not found");
            return;
        }

        let current: RopeNode | null = this.head;
        while (current != null) {
            if (current.getValue() == value) {
                console.log("The list contains the value ", value);
                return;
            }

            current = current.getNextNode();
        }

        console.log("The value is not found")
    }

    //deletes the first occurance of the value
    deleteNode(value: number): void {
        
        if (this.head == null) {
            console.log("The list is empty");
            return;
        }

        let current: RopeNode | null = this.head;

        while (current != null) {
            if (current.getValue() == value) {
                
                console.log("The node with value ", value, " has been deleted");
                return;
            } 

            current = current.getNextNode()
        }

        console.log("The node with value ", value, " has not been found in the list");
    }

    print(): void {
        if (this.head == null) {
            console.log("The list is empty");
            return;
        }

        let current: RopeNode | null = this.head;

        while (current != null) {
            console.log(current.getValue());
            current = current.getNextNode();
        }
    }
}