import { Sortable } from './Sorter';
class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList implements Sortable {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    let length = 0;
    if (!this.head) {
      return 0;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      length++;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index Out of Bound');
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index Out of Bound');
  }

  swap(leftIndex: number, rightIndex: number): void {
    let temp = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = temp;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is Empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  print(): void {
    let node = this.head;

    let result = '';
    while (node) {
      result += node.data + '-->';
      node = node.next;
    }
    result += ' null';
    console.log(result);
  }
}
