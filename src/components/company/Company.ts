import faker from '@faker-js/faker';
import { Mappable } from '../map/CustomMap';

export default class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.companyName =
      faker.company.companyName();
    this.catchPhrase =
      faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
     <div>
        <h3>Company Name: ${this.companyName}</h3>
        <b>Catch Phrase: ${this.catchPhrase} </b>  
      </div>
        `;
  }
}
