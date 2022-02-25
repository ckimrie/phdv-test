export class Pizza {

  alowedIngredients = ["pepperoni"];
  alowedSizes = ["Small", "Medium", "Large", "Extra Large"];

  size= null

  ingredients = ["cheese", "tomato"];
  extras = [];
  allowedExtras = ["jalapenos", "cheese", "mushroom", "beef"]

  constructor() {
  }

  setSize(size){
    if(!this.alowedSizes.includes(size)){
      throw new Error("Invalid size provided")
    }

    this.size = size
  }

  removeIngredient(ingredient){
    this.ingredients = this.ingredients.filter((existingIngredient) => {
      return existingIngredient !== ingredient
    })
  }

  addIngredient(ingredient){
    if(!this.alowedIngredients.includes(ingredient)){
      throw new Error ("Ingredient not allowed");
    }
    this.ingredients.push(ingredient)
  }

  addExtras(option){
    if(!this.allowedExtras.includes(option)){
      throw new Error("Extra not allowed");
    }

    this.extras.push(option)
  }

}
