import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

let numbersCollection = new NumberCollection([-2, 10, 3, -5, 0]);

console.log(`Before ${numbersCollection.data}`);
numbersCollection.sort();
console.log(`After --> ${numbersCollection.data}`);

let charCollection = new CharactersCollection('xAbyJ');
console.log(charCollection.data);
charCollection.sort();
console.log(charCollection.data);

let linkedList = new LinkedList();
linkedList.add(-10);
linkedList.add(5);
linkedList.add(-4);
linkedList.add(23);

linkedList.print();
linkedList.sort();
linkedList.print();
