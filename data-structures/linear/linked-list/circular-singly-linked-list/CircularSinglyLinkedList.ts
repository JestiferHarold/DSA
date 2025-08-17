import { Node } from "../../node/Node";

class CircularSLL {
    private head: Node | null;

    constructor (head: Node | null = null) {
        this.head = head;
    }

    getHead(): Node | null {
        return this.head;
    }

    size(): number {
        let n: number = 0;

        let current: Node | null = this.head;

        while (current != null) {
            n ++;
            current = current.getNextNode();
        }

        return n;
    }

    print(): void {
        if (this.head == null) {
            console.log("The list is empty");
            return;
        }

        console.log(this.head.getValue());
        let current: Node | null = this.head.getNextNode();

        while (current != this.head) {
            //@ts-ignore
            console.log(current.getValue());
            //@ts-ignore
            current = current.getNextNode();
        }
    }

    
}

export { CircularSLL };