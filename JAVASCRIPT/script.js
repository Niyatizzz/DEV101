//js coment

//datatypes
console.log("helloworld")
console.log(typeof("hey"))
console.log(typeof 56);

//variables - camelcase
let myVariable
console.log(myVariable)

//alert("helloo") - alert box

//objects - key value pairs - {}
const myObj = {name : "abc"};
console.log(myObj)

const myObjj = {
    alive : true,
    age : 18,
    hobbies : ['eat', 'sleep'],
    beverage : {
        morning : 'coffee',
        evening : 'tea'
    },
    //method
    action : function myfunc () {
        return `time for ${this.beverage.morning}`;
    }
};
console.log(myObjj.beverage.evening)
console.log(myObjj.hobbies[0])

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
