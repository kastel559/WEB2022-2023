// Task1
// let items = {};
// function A() { return items; }
// function B() { return items; }
// alert( new A() == new B() );

// Task 2
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("a = ", 0);
//         this.b = +prompt("b = ", 0);
//     }
//     this.sum = function() {
//         return this.a + this.b;
//     }
//     this.mul = function() {
//         return this.a * this.b;
//     }
// }
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// Task 3
function Accumulator(startValue) {
    this.value = startValue;
    this.read = function() {
        let someValue = +prompt("what you want to add?", 0);
        this.value += someValue;
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values