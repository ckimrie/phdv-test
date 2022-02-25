import {Pizza} from './Pizza.js';

export class CustomPizza extends Pizza {
  options = ["toppingsType"]

  toppingsType = "standard";
  toppingsTypeValues = ["standard", "vegetable", "meat"];

  setTopping(option, value){

    if(!this.options.includes(option)){
      throw new Error("Invalid topping option")
    }
    if(!this[`${option}Values`].includes(value)){
      throw new Error("Invalid topping values")
    }

    this[option] = value;

  }



}
