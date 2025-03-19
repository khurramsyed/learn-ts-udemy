import { NumberCollection } from './NumbersCollection';

export interface Sortable {
  get length(): number;
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
}

export abstract class Sorter implements Sortable {
  abstract get length(): number;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract compare(leftIndex: number, rightIndex: number): boolean;

  sort(): void {
    let size = this.length;
    for (let i = 0; i < size; i++) {
      for (let j = i; j < size; j++) {
        if (this.compare(i, j)) {
          this.swap(i, j);
        }
      }
    }
  }
}
