export default class LinkedList<T> {
	// TODO Add a private _deleteNode method to make code cleaner

	private itemCount: number
	private head: Node<T> | null
	private tail: Node<T> | null

	constructor() {
		this.itemCount = 0
	}
	
	push(item: T): void {
		const node = new Node(item)
		if (this.tail === null) {
			this.head = node
			this.tail = node
		} else {
			node.setPrev(this.tail)
			this.tail.setNext(node)
		}
		this.itemCount += 1
	}

	pop(): T | null {
		if (this.tail !== null) {
			const tail = this.tail
			const prev = this.tail.getPrev()
			if (prev !== null) {
				prev.setNext(null)
				this.tail = prev
			}
			this.itemCount -= 1
			return tail.value
		}
		return null
	}

	shift(): T | null {
		if (this.head !== null) {
			const head = this.head
			const next = this.head.getNext()
			if (next !== null) {
				next.setPrev(null)
				this.head = next
			}
			this.itemCount -= 1
			return head.value
		}
		return null
	}

	unshift(item: T) {
		const node = new Node(item)
		if (this.head === null) {
			this.head = node
			this.tail = node
		} else {
			node.setNext(this.head)
			this.head.setPrev(node)
		}
		this.itemCount += 1
	}

	count(): number {
		return this.itemCount
	}

	delete(item: T) {
		// TODO
		let node = this.head
		while (node !== null) {
			if (node.value === item) {
				this.itemCount -= 1
				node = null
			}
		}
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
