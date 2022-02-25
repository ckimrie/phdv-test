import {Pizza} from '../src/Pizza';
import {Cart} from '../src/Cart.js';
import {Order} from '../src/Order.js';
import {CustomPizza} from '../src/CustomPizza.js';
import {PepperoniPizza} from '../src/PepperoniPizza.js';

describe('Requirements', () => {

  it('should allow me to order a large pepperoni pizza', () => {
    const cart = new Cart()
    const pizza = new Pizza();

    pizza.setSize("Medium");
    cart.add(pizza);

    const order = new Order();
    order.createFromCart(cart);


    expect(pizza.size).toBe("Medium")
    expect(cart.linItems.length).toBe(1)
    expect(order.isValid).toBe(true)
  });

  it('should let a customer order a medium custom pizza with no cheese and all veg toppings', () => {

    const cart = new Cart()
    const pizza = new CustomPizza();

    pizza.setSize("Medium");
    pizza.removeIngredient("cheese");
    pizza.setTopping("toppingsType", "vegetable")

    cart.add(pizza);
    const order = new Order();
    order.createFromCart(cart);

    expect(pizza.size).toBe("Medium")
    expect(pizza.ingredients).toMatchInlineSnapshot(`
Array [
  "tomato",
]
`)
    expect(pizza.toppingsType).toBe("vegetable")
    expect(cart.linItems.length).toBe(1)
    expect(order.isValid).toBe(true)

  });


  it('should let customer add a medium pepperoni pizza with extra jalapenos, mushrooms and beef, ' +
      'a and an extra-large custom pizza with extra cheese and all the meat toppings', () => {


    const cart = new Cart()
    const pizza1 = new PepperoniPizza();
    pizza1.setSize("Medium");
    pizza1.addExtras("jalepenos")
    pizza1.addExtras("mushrooms")
    pizza1.addExtras("beef")


    const pizza2 = new CustomPizza();
    pizza2.setSize("Extra Large")
    pizza2.addExtras("cheese")


    const order = new Order();
    order.createFromCart(cart);

    expect(pizza.size).toBe("Medium")
    expect(pizza.cheese).toBe(false)
    expect(pizza.toppingsType).toBe("vegetable")
    expect(cart.linItems.length).toBe(1)
    expect(order.isValid).toBe(true)

  });

});







