import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

let numbersCollection = new NumberCollection([-2, 10, 3, -5, 0]);
const sorter: Sorter = new Sorter(numbersCollection);
console.log(`Before ${numbersCollection.data}`);
sorter.sort();
console.log(`After --> ${numbersCollection.data}`);

let charCollection = new CharactersCollection('xAbyJ');
const stringSorter: Sorter = new Sorter(charCollection);
console.log(charCollection.data);
stringSorter.sort();
console.log(charCollection.data);

let linkedList = new LinkedList();
linkedList.add(-10);
linkedList.add(5);
linkedList.add(-4);
linkedList.add(21);

const linkedListSorter: Sorter = new Sorter(linkedList);

linkedList.print();
linkedListSorter.sort();
linkedList.print();
