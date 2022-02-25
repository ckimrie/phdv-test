export class Order {

  isValid = false;

  cart = null;


  /**
   *
   * @param cart
   */
  createFromCart(cart){
    if(!this.validateCart(cart)){
      throw new Error("Cart is invalid")
    }

    this.cart = cart;
    this.isValid = true

  }

  validateCart(cart){
    return true;
  }

}
