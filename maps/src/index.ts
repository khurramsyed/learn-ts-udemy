
import { User } from  './user';
import { Company } from './company'
import { CustomMap } from './CustomMap';

const user: User = new User();
console.log(user)

const company: Company = new Company();
console.log(company)

const customMap = new CustomMap('map');
customMap.addMarker(user)
customMap.addMarker(company)



