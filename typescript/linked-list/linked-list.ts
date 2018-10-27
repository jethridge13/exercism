export default class LinkedList<T> {

    private itemCount: number
    private head: Node<T> | null
    private tail: Node<T> | null

    constructor() {
        this.itemCount = 0
    }
   
    push(item: T): void {
        const node = new Node(item)
        if (!this.tail) {
            this.head = node
            this.tail = node
        } else {
            node.setPrev(this.tail)
            this.tail.setNext(node)
            this.tail = node
        }
        this.itemCount += 1
    }

    pop(): T | null {
        if (this.tail) {
            const value = this.tail.value
            this._deleteNode(this.tail)
            return value
        }
        return null
    }

    shift(): T | null {
        if (this.head) {
            const value = this.head.value
            this._deleteNode(this.head)
            return value
        }
        return null
    }

    unshift(item: T): void {
        const node = new Node(item)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.setNext(this.head)
            this.head.setPrev(node)
            this.head = node
        }
        this.itemCount += 1
    }

    count(): number {
        return this.itemCount
    }

    delete(item: T): void {
        let node = this.head
        while (node !== null) {
            if (node.value === item) {
                this._deleteNode(node)
                node = null
            }
            if (node !== null) {
                node = node.getNext()
            }
        }
    }

    toString(): string {
        let node = this.head
        let s = ''
        while (node !== null) {
            s += '['
            if (node === this.head) {
                s += 'HEAD:'
            }
            if (node === this.tail) {
                s += 'TAIL:'
            }
            s += 'value:' + node.value
            s +=']'
            node = node.getNext()
        }
        return s
    }

    private _deleteNode(node: Node<T>): void {
        if (node === this.head) {
            const newHead = this.head.getNext()
            if (newHead) {
                newHead.setPrev(null)
                this.head = newHead
            } else {
                this.head = null
            }
        }
        if (node === this.tail) {
            const newTail = this.tail.getPrev()
            if (newTail) {
                newTail.setNext(null)
                this.tail = newTail
            } else {
                this.tail = null
            }
        }
        const next = node.getNext()
        const prev = node.getPrev()
        if (next && prev) {
            next.setPrev(prev)
            prev.setNext(next)
        } else if (next) {
            next.setPrev(null)
        } else if (prev) {
            prev.setNext(null)
        }
        this.itemCount -= 1
    }
}

class Node<T> {

    value: T
    private prev: Node<T> | null
    private next: Node<T> | null

    constructor(value: T, prev?: Node<T>, next?: Node<T>) {
        this.value = value
        if (prev) {
            this.prev = prev
        } else {
            this.prev = null
        }
        if (next) {
            this.next = next
        } else {
            this.next = null
        }
    }

    getNext(): Node<T> | null {
        if (this.next) {
            return this.next
        }
        return null
    }

    getPrev(): Node<T> | null {
        if (this.prev) {
            return this.prev
        }
        return null
    }

    setNext(node: Node<T> | null): void {
        this.next = node
    }

    setPrev(node: Node<T> | null): void {
        this.prev = node
    }
}
