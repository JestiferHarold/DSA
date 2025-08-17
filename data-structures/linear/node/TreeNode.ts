class TreeNode {
    private value: number;
    private rightNode: TreeNode | null;
    private leftNode: TreeNode | null;

    constructor(value: number, rightNode: TreeNode | null = null, leftNode: TreeNode | null = null) {
        this.value = value;
        this.rightNode = rightNode;
        this.leftNode = leftNode;
    }

    getValue(): number {
        return this.value;
    }

    getRightNode(): TreeNode | null {
        return this.rightNode;
    }

    getLeftNode(): TreeNode | null {
        return this.leftNode;
    }
}

export { TreeNode };