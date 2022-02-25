import {Pizza} from './Pizza.js';

export class Cart {

  linItems = []

  constructor() {
  }

  add(pizza){
    if(pizza instanceof Pizza){
      this.linItems.push(pizza);
      return;
    }
    throw new Error ("Invalid product being added");
  }
}
