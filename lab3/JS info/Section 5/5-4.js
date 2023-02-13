// Task 1
// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingCart = fruits;

// shoppingCart.push("Banana");

// alert( fruits.length ); // 4

// Task 2
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert( styles.shift() );
// styles.unshift("Rap", "Reggae");

// Task 3
// function sumInput() {
//     let numbers = [];
//     while (true) {
//       let value = prompt("A number please?", 0);
//       if (value === "" || value === null || !isFinite(value)) break;
//       numbers.push(+value);
//     }
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
//   alert( sumInput() );

// Task 4
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       let sumFixedStart = 0;
//       for (let j = i; j < arr.length; j++) {
//         sumFixedStart += arr[j];
//         maxSum = Math.max(maxSum, sumFixedStart);
//       }
//     }
//     return maxSum;
//   }
//   alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
//   alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
//   alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
//   alert( getMaxSubSum([1, 2, 3]) ); // 6
//   alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100