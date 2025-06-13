// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// Question 1

function sumRange(num) {
  if (num <= 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}
// console.log(sumRange(3));

function sumRangeBetter(num) {
  return num === 1 ? 1 : sumRangeBetter(num - 1) + num;
}
// console.log(sumRangeBetter(3));

// Question 2

function power(num, pow) {
  if (pow === 0) {
    return 1;
  }
  return num * power(num, pow - 1);
}

// console.log(power(2, 4));
// console.log(power(2, 3));
// console.log(power(2, 2));
// console.log(power(2, 1));
// console.log(power(2, 0));

// Question 3
//Calculate factorial

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
// console.log(factorial(5));

// Question 4
// check all values in array

const allAreLessThanSeven = all([1, 2, 6], function (num) {
  return num < 7;
});
// console.log(allAreLessThanSeven); // false

function all(array, callback) {
  let copy = array.slice(); //shallow copies array
  if (copy.length === 0) return true;

  //   console.log(callback(copy[0]));
  if (callback(copy[0])) {
    copy.shift(); //remove first element from array
    return all(copy, callback);
  } else {
    return false;
  }
}

// Question 5
// function that takes in an array of numbers and returns the product of them all.

function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  }
  return array[0] * productOfArray(array.slice(1));
}
// console.log(productOfArray([1, 2, 3]));
// console.log(productOfArray([1, 2, 3, 10]));

// Question 6
// contains searches for a value in a nested object.
// It returns true if the object contains that value.
// Otherwise, it returns false.

let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          morestuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};
function contains(obj, value) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

// console.log(contains(nestedObject, 44)); //true
// console.log(contains(nestedObject, "foo")); //false

function containsBetter(object, searchValue) {
  // because 'null' has a typeof "object", we have to explicitly check
  // to prevent trying to access null's values (which dont exist)
  if (typeof object != "object" || object == null) {
    return object === searchvalue;
  } else {
    for (const value of Object.values(object)) {
      //only search first value of object
      if (contains(value, searchValue)) {
        return true;
      }
    }
  }
}

// console.log(containsBetter(nestedObject, 44)); //true
// console.log(containsBetter(nestedObject, "foo")); //false

// Question 7
//given a multi-dimensional integer array, return the total number of integers stored inside this array

function totalIntegers(array) {
  if (array.length === 0) {
    return 0;
  }
  let total = 0;
  let first = array.shift();
  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(array);
}

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]);
// console.log(seven);

//Wuestion 8
// write a function that sums squares of numbers in list that may contain more lists

function SumSquares(array) {
  if (array.length === 0) {
    return 0;
  }
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += SumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}

var1 = [1, 2, 3];
// console.log(SumSquares(var1)); // 14

var1 = [[1, 2], 3];
// console.log(SumSquares(var1)); // 14

var1 = [[[[[[[[[1]]]]]]]]];
// console.log(SumSquares(var1)); //1

var1 = [10, [[10], 10], [10]];
// console.log(SumSquares(var1)); // 400

//Question 9
// the function should return an array containing repetitions of the number argument.
// For instance replicate(3,5) should return [5,5,5]. If the times argument is negative, return an empty array.

function replicate(number, value) {
  if (number <= 0) {
    return [];
  }

  return [value].concat(replicate(number - 1, value));
}

console.log(replicate(3, 5));
console.log(replicate(1, 69));
console.log(replicate(-2, 6));
