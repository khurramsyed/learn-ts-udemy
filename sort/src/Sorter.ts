import { NumberCollection } from "./NumbersCollection";

export interface Sortable{
  get length(): number
  swap(leftIndex: number, rightIndex: number): void
  compare(leftIndex: number, rightIndex: number): boolean
}

export class Sorter {
  
  constructor(public collection : Sortable){

  }

  sort(): void{
    let size = this.collection.length
    for( let i=0; i< size; i++){
      for(let j=i; j< size; j++){
        if(this.collection.compare(i,j)){
          this.collection.swap(i,j)
        }
      }

    }
  }
}
