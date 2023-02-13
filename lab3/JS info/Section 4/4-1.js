// Task 1
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete"
// delete user.name;
// console.log(user.name)
// console.log(user.surname)

// Task 2
// function isEmpty(value) {
//     for(key in value) {
//         return false;
//     }
//     return true;
// }
// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// Task 3
// function sum(items) {
//     let sumNum = 0;
//     for(item in items) {
//         sumNum += items[item];
//     }
//     return sumNum;
// }
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sumOfSalaries = sum(salaries)
// alert(sumOfSalaries)

// Task 4
function multiplyNumeric(items) {
    for(item in items) {
        if (typeof(items[item]) == "number") {
            items[item] *= 2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  alert(menu)