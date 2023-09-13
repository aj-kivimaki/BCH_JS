// outputs on console!

class Pizza {
    constructor(pizzaName, servings, toppings) {
        this.pizzaName = pizzaName;
        this.servings = servings;
        this.toppings = toppings;
        this.basePrice = 2;
    }

    getPrice() {
        // servings price
        let servingsPrice = 0;
        if (this.servings === 2) { servingsPrice = 5.5 }
        if (this.servings === 4) { servingsPrice = 8.5 }
        if (this.servings === 6) { servingsPrice = 10.5 }
        if (this.servings === 8) { servingsPrice = 13.5 }

        // extra toppings price
        let toppingsPrice = 0;
        if (this.toppings.length > 4) {
            toppingsPrice = 0.5 * (this.toppings.length - 4);
        }

        // return pizza price
        let pizzaPrice = this.basePrice + servingsPrice + toppingsPrice;
        return pizzaPrice;
    }

    getInfo() {
        return `- ${this.pizzaName} Pizza. ${this.servings} servings and ${this.toppings.length} toppings.`;
    }
}


class Order {
    constructor(customerName, deliveryType) {
        this.customerName = customerName;
        this.deliveryType = deliveryType;
        this.pizzaPrice = 0;
        this.pizzas = [];
    }

    addPizza(pizza) {
        this.pizzas.push(pizza);
        this.pizzaPrice += pizza.getPrice();
    }

    checkDelivery() {
        let deliveryPrice = 0;
        if (this.deliveryType === 'delivery') {
            deliveryPrice = 5;
        }
        this.pizzaPrice += deliveryPrice;
        return deliveryPrice;
    }

    placeTheOrder() {
        console.log(`Hello ${this.customerName}!`);
        console.log(' ');
        console.log(`Your order includes:`);
        console.log(' ');

        for (const pizza of this.pizzas) {
            console.log(`${pizza.getInfo()} | ${pizza.getPrice().toFixed(2)}€`);
            console.log(`(${pizza.toppings.join(', ')})`);
            console.log(' ');
        }

        console.log(`Delivery: ${this.checkDelivery().toFixed(2)}€`);
        console.log(' ');
        console.log(`TOTAL: ${this.pizzaPrice.toFixed(2)}€`);
        console.log(`Thank you for your order. Enjoy!`);
    }
}

// create an order | name, delivery method
const order = new Order('AJ', 'delivery');

// create and add the pizzas to the order | name, servingsize, toppings (array)
order.addPizza(new Pizza('Salami', 6, ['salami', 'olive', 'pecorino cheese', 'extra cheese', 'onion']));
order.addPizza(new Pizza('Frutti Di Mare', 2, ['tuna', 'prawn', 'mussel', 'squid']));
order.addPizza(new Pizza('Kebab', 4, ['kebab', 'kebab', 'kebab']));

// place the order
order.placeTheOrder();
