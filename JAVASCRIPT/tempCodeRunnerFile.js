//classes
class Pizza {
    constructor() {
        this.size = 'medium';
        this.crust = 'original'
    }
    bake() {
        console.log(`baking a ${this.size} sized ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza();

myPizza.bake();