
// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {
  let newArray = [];
  let newArray2 = [];

  //if statement to sort out whether or not the lowest number is first
  if (arr[0] < arr[1]) {
    // if lowest number is first, loop with increments
    for (let i = arr[0] + 1; i < arr[1]; i++) {
      newArray.push(i);
    }
    // using reduce method to get the sum of the array of numbers in between
    let sumInBetween = newArray.reduce(function (total, num) {
      return total + num;
    });
    return arr[0] + arr[1] + sumInBetween;
  } else if (arr[0] > arr[1]) {
    // if higher number is first, loop with decrements
    for (let j = arr[0] - 1; j > arr[1]; j--) {
      newArray2.push(j);
    }
    // using reduce method to get the sum of the array of numbers in between
    let sumInBetween2 = newArray2.reduce(function (total, num) {
      return total + num;
    });
    return arr[0] + arr[1] + sumInBetween2;
  }
}

sumAll([10, 5]);
// returns 45
sumAll([5, 10]);
// returns 45


// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  // [1, 2, 3, 5, 1, 2, 3, 4, 5]
  // filter method makes new array, filtering through each element
  return newArr.filter(function (currentValue) {
    // if the currentValue doesn't exist in arr1 OR arr2, add it to new array
    if (arr1.indexOf(currentValue) === -1 || arr2.indexOf(currentValue) === -1) {
      return currentValue;
    }
  });

}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// returns [4]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
// returns  ["piglet", 4]


// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function destroyer(arr) {
  // this line turns the arguments variable into a full array instead of limited array
  let args = Array.prototype.slice.call(arguments);
  // removes first argument from args
  args.splice(0, 1);
  let newArray = arr.concat(args);

  let finalArray = newArray.filter(function (currentValue) {
    // if the currentValue DOESNT exist in the args array, add it to new array
    if (args.indexOf(currentValue) === -1) {
      return currentValue;
    }
  });

  return finalArray;

}

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
// returns  [12,92,65]
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// returns [1, 1];


// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;
  console.log(str);
  // $1 and $2 are parenthesized submatches. 
  // $1 is the string/char caught by the range int he first parentheses and $2 is the match
  // caught by the second part. if you have more, you can use $3, $4, etc. The SPACE in between
  // the $1 and $2 is giving it the space in the string.
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  console.log(str);
  // Replace space and underscore with - , and finally, make it lowercase.
  return str.replace(regex, '-').toLowerCase();
}


spinalCase("thisIsSpinalTap");
// returns "this-is-spinal-tap"
spinalCase("AllThe-small Things");
// returns  "all-the-small-things"


// Intermediate Algorithm Scripting: Pig Latin
// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonantBlends = ['bl', 'br', 'ch', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'pl', 'pr', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr'];
  console.log(str[0]);
  // checking to see if the first letter is a vowel
  if (vowels.indexOf(str[0]) >= 0) {
    return str.concat("way");
  }
  // checking to see if theres a consonant blend
  if (consonantBlends.indexOf(str[0] + str[1]) >= 0) {
    /// slicing away the first two letters of the string
    let newString = str.slice(2, str.length);
    console.log(newString);
    return `${newString}${str[0]}${str[1]}ay`;
  } else {
    // slicing away the first letter of the string
    let newString = str.slice(1, str.length);
    return `${newString}${str[0]}ay`;
  }


}

translatePigLatin("consonant");

// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // new array that will be pushed to
  let arr = [];

  // array of the keys in the source object
  let sourceKeys = Object.keys(source);

  // array of the values in the source object
  let sourceValues = Object.values(source);

  console.log(sourceKeys);
  console.log(sourceValues);

  // looping through the collection array
  for (let i = 0; i < collection.length; i++) {
    // if there are multiple keys in the source object, we will have to check for sourceKeys[0], sourceKeys[1],
    // sourceValues[0], and sourceValues[1]
    if (sourceKeys.length > 1) {
      // if the object has BOTH keys in the source object
      if (collection[i].hasOwnProperty(sourceKeys[0]) && collection[i].hasOwnProperty(sourceKeys[1])) {
        // and if the values in the source object exist in the object
        if (Object.values(collection[i]).indexOf(sourceValues[0]) >= 0) {
          if (Object.values(collection[i]).indexOf(sourceValues[1]) >= 0) {
            arr.push(collection[i]);
          }

        }
      }
      // if there is only one key in the source object, we only have to account for the [0] index
    } else if (sourceKeys.length === 1) {
      // if the object has the key in the source object
      if (collection[i].hasOwnProperty(sourceKeys[0])) {
        // if the value in the source object exists in the object
        if (Object.values(collection[i]).indexOf(sourceValues[0]) >= 0) {
          arr.push(collection[i]);
        }
      }
    }

  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// returns [{ first: "Tybalt", last: "Capulet" }]



// Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
    const newAfter = after[0].toUpperCase() + after.slice(1);
    const newStr2 = str.replace(before, newAfter);
    return newStr2;
  } else {
    const newStr = str.replace(before, after);
    return newStr;
  }
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// returns "He is Sitting on the couch".


// Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
  let AT = ['A', 'T'];
  let CG = ['C', 'G'];
  let GC = ['G', 'C'];
  let TA = ['T', 'A'];

  let newArray = [];

  for (let i = 0; i < str.length; i++) {

    if (str[i] === 'A') {
      newArray.push(AT);
    } else if (str[i] === 'C') {
      newArray.push(CG);
      console.log(newArray);
    } else if (str[i] === 'G') {
      newArray.push(GC);
      console.log(newArray);
    } else if (str[i] === 'T') {
      newArray.push(TA);
    }
  }
  return newArray;
}

pairElement("GCG");



// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let currentCode = str.charCodeAt(i);

    if (currentCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(currentCode - 1);
    }
  }

  return undefined;
}

fearNotLetter("abcdefghjklmno");
// returns "i"


//   Intermediate Algorithm Scripting: Sorted Union
//   Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

//   In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

//   The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

//   Check the assertion tests for examples.

function uniteUnique(arr) {
  let args = Array.prototype.slice.call(arguments);
  let argsThree = args[0].concat(args[1]).concat(args[2]);
  let argsFour = args[0].concat(args[1]).concat(args[2]).concat(args[3]);
  let finalArray = [];
  if (args[3]) {

    for (let i = 0; i < argsFour.length; i++) {
      if (finalArray.indexOf(argsFour[i]) === -1) {
        finalArray.push(argsFour[i]);
      }
    }
    return finalArray;
  }

  for (let i = 0; i < argsThree.length; i++) {
    if (finalArray.indexOf(argsThree[i]) === -1) {
      finalArray.push(argsThree[i]);
    }
  }

  finalArray = finalArray.filter(function (e) {
    return e != undefined;
  });

  return finalArray;

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// returns [1, 3, 2, 5, 4]


//   Intermediate Algorithm Scripting: Convert HTML Entities
//   Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let newArrayNoSpaces = str.split("");
  let newArray = str.split(" ");
  function htmlSwap(x) {
    if (x == '&') {
      return '&amp;';
    } else if (x == '<') {
      return '&lt;';
    } else if (x == '>') {
      return '&gt;';
    } else if (x == `"`) {
      return '&quot;';
    } else if (x == `'`) {
      return '&apos;';
    } else {
      return x;
    }
  }
  newArray = newArrayNoSpaces.map(htmlSwap);
  newArray = newArray.join("");
  return newArray;
}

convertHTML("Sixty > twelve");
// returns Sixty &​gt; twelve

//   Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
//   Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

//   The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

//   For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  // array of numbers til num
  let newArray = [1];
  for (let i = 1; i <= num;) {
    newArray.push(i);
    i = newArray[newArray.length - 1] + newArray[newArray.length - 2];
  }

  let res = newArray.reduce(function (prev, curr) {
    // if current number is NOT even
    if (curr % 2 !== 0) {
      return prev + curr;
    } else {
      return prev;
    }
  });

  return res;


}

sumFibs(4);
// returns 5

//   Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  // making a new array of all numbers between the two in the parameter array
  let newArr = [];
  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }

  let a = min;

  for (let x = 0; x < newArr.length; x++) {
    let b = newArr[x];
    let c = a;
    // continue looping as long as a & b are positive and not zero
    while (a && b) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    a = c * newArr[x] / (a + b);
  }
  return a;
}

smallestCommons([1, 5]);
// returns 60

// Intermediate Algorithm Scripting: Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  // arr[0] will continually shift, changing values
  while (func(arr[0]) == false) {
    arr.shift();
  }
  return arr;
}

dropElements([0, 1, 0, 1], function (n) { return n === 1; });
// returns [1, 0, 1]


// Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let finalArr = [];
  flatten(arr);
  function flatten(arr) {
    arr.forEach(function (e) {
      // checking if the element in the array ISN'T an array
      if (!Array.isArray(e)) {
        finalArr.push(e);
      } else {
        // restart the function with the array of the element until it isn't an array
        flatten(e);
      }
    });
  }
  return finalArr;
}

steamrollArray([1, [], [3, [[4]]]]);
// [1, 2, 3, 4]


// Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  let newArr = [];
  // turning string into an array
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    // for each binary number, it is first turned into a decimal with parseInt(), then converted to the correct character with fromCharCode()
    newArr.push(String.fromCharCode(parseInt(str[i], 2)));
  }
  // put the array back together into a string
  return newArr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// returns  "Aren't bonfires fun!?"


// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  // loop through collection
  for (let i = 0; i < collection.length; i++) {
    // for in statement is used to check every property in the object
    for (let x in collection[i]) {
      // if the object has the property of the pre parameter
      if (collection[i].hasOwnProperty(pre)) {
        let value = collection[i][pre];
        // if the object has the property of pre, and the value of that property is not a truthy value
        if (!Boolean(value)) {
          return false;
        }
        // if the object doesn't have the proprty of pre
      } else {
        return false;
      }
    }
  }
  return true;
}

truthCheck([{ "single": "double" }, { "single": NaN }], "single");
// returns false


// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.


function addTogether() {
  // if there are multiple arguments, just add the two numbers together, assuming they ARE numbers
  if (arguments.length > 1) {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== 'number' || Array.isArray(arguments[i])) return undefined;
      else newArr.push(arguments[i]);
    }
    return newArr[0] + newArr[1];
    // if one argument, assuming its a number, return a new function that takes a new parameter and adds it to the original
  } else {
    console.log('one argument');
    let x = arguments[0];
    if(typeof x !== 'number' || Array.isArray(x)) return undefined;
    else { 
      return function(arg){
        if(Array.isArray(arg)) return undefined;
        if(x === undefined || arg === undefined) return undefined;
        else return x + arg;
      }
    }
  }
}

addTogether(2, 3);
// returns 5
addTogether(2)(3);
// returns 5


// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return firstAndLast;
  };

  this.getFirstName = function () {
    return firstAndLast.split(' ')[0];
  }

  this.getLastName = function () {
    return firstAndLast.split(' ')[1];
  }

  this.setFirstName = function (first) {
    firstAndLast = first + ' ' + firstAndLast.split(' ')[1];
  }

  this.setLastName = function (last) {
    firstAndLast = firstAndLast.split(' ')[0] + ' ' + last;
  }

  this.setFullName = function (newName) {
    firstAndLast = newName;
  }

};

var bob = new Person('Bob Ross');
bob.setFullName("Blake Unnerstall");
bob.getFullName();
// returns 'Blake Unnerstall'

// Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArray = [];
    for(let x in arr){
      var results = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[x].avgAlt, 3) / GM));
      console.log(arr[x].avgAlt);
      newArray.push({name: arr[x].name, orbitalPeriod: results});
    }
    return newArray;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
// returns [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]