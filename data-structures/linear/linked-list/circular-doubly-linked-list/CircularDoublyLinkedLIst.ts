import { RopeNode } from "../../node/RopeNode";

class CircularDLL {
    private head: RopeNode | null;
    private tail: RopeNode | null;

    constructor (head: RopeNode | null = null, tail: RopeNode | null = null) {
        this.head = head;
        this.tail = tail;
    }

    getHead(): RopeNode | null {
        return this.head;
    }

    getTail(): RopeNode | null {
        return this.tail;
    }

    size(): number {
        let n: number = 0;

        if (this.head == null) {
            return n;
        }

        let current: RopeNode = this.head;

        while (current != this.tail) {
            n ++;
            //@ts-ignore
            current = current.getNextNode();
        }

        return n + 1;
    }
}

export { CircularDLL };