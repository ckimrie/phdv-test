import {Pizza} from './Pizza.js';

export class PepperoniPizza extends Pizza {

  constructor(props) {
    super(props);

    this.addIngredient("pepperoni")
  }


}
