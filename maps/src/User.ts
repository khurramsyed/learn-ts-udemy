import {faker} from '@faker-js/faker'
import { Mappable } from './CustomMap';
export class User implements Mappable{
  name: string;
  location:{
    lng: number;
    lat: number;
  };
  
  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }

  getMarkerContent() : string {
    return `User : ${this.name}`
  }
  

}