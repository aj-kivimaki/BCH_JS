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

        // return total price
        let totalPrice = this.basePrice + servingsPrice + toppingsPrice;
        return `Total price for the pizza is ${totalPrice}€`;
    }

    getInfo() {
        return `You ordered a ${this.pizzaName} Pizza. ${this.servings} servings and ${this.toppings.length} toppings.`;
    }
}

const salami = new Pizza('Salami', 6, ['Salami', 'Olive', 'Pecorino Cheese', 'Extra Cheese', 'Onion']);
const fruttiDiMare = new Pizza('Frutti Di Mare', 2, ['Tuna', 'Prawn', 'Mussel', 'Squid'], true);

console.log(salami.getInfo());
console.log(salami.getPrice());

console.log(fruttiDiMare.getInfo());
console.log(fruttiDiMare.getPrice());
