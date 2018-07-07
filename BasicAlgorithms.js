// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
// Remember to use Read-Search-Ask if you get stuck. Write your own code. 

function confirmEnding(str, target) {
  // substring method extracts chars from a string between two specified indexes
  if (str.substring(str.length, (str.length - target.length)) === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
// returns true


// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function repeatStringNumTimes(str, num) {
  // new string to push to
  let newString = "";
  // counts up to the number specified, adding the string to newString with every increment.
  for (var i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}

repeatStringNumTimes("abc", 3);
// returns "abcabcabc"


// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  } else if (num < str.length) {
    let newString = str.substring(0, num);
    let finished = newString + "...";
    return finished;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
// returns "A-trisket..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
// returns "A-tisket a-tasket A green and yellow basket"



// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function titleCase(str) {
  // new array we'll use later
  let finalArray = [];
  let newArray = str.split(" ");
  // changes to ["I'm", "a", "little", "tea", "pot"]
  for (var i = 0; i < newArray.length; i++) {
    // finds the first character of the word
    let firstChar = newArray[i].charAt(0);
    // makes the char uppercase
    let upperCase = firstChar.toUpperCase();
    // newRest is equal to the REST of the word, so everything except the first capitalized letter
    let newRest = newArray[i].substring(1, str.length);
    // making the rest of the word lowercase, so theres no errors with words lIkE tHiS
    let finalRest = newRest.toLowerCase();

    let finalWord = upperCase + finalRest;
    finalArray.push(finalWord);
  }
  // join(" ") converts array to string and adds a space between the words
  var finalString = finalArray.join(" ");
  return finalString;

}

titleCase("I'm a little tea pot");
// returns "I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt");
// returns "Short And Stout"


// Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function frankenSplice(arr1, arr2, n) {
  // [4]
  let newArr2 = arr2.slice(0, n);

  // returns array as new array object
  // [4, 5, 6]
  let newArr2other = arr2.slice();


  // [5, 6]   
  newArr2other.splice(0, n);

  // [4, 1, 2 , 3]
  let semiFinalArray = newArr2.concat(arr1);


  // [4, 1, 2, 3, 5, 6]
  let finalArray = semiFinalArray.concat(newArr2other);
  return finalArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// returns [4, 1, 2, 3, 5, 6]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
// returns  ["head", "shoulders", "claw", "tentacle", "knees", "toes"]


// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function bouncer(arr) {
  // new function to check if the array value is not falsy by using the filter() method
  function checkFalsy(arr1) {
    if (arr1 != false || arr1 != undefined || arr1 != null || arr1 != NaN || arr1 != 0 || arr1 != "") {
      return arr1;
    }
  }
  // the filter() method creates a new array filled with elements that pass a test (provided as a function)
  let newArray = arr.filter(checkFalsy);
  return newArray;
}

bouncer([7, "ate", "", false, 9]);
// returns [7, "ate", 9]
bouncer(["a", "b", "c"]);
// returns  ["a", "b", "c"]


// Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function getIndexToIns(arr, num) {
  function ascendingOrder(a, b) {
    return a - b;
  }
  // sorting the array with the sort() method, using the function above
  let newlySortedArray = arr.sort(ascendingOrder);
  
  for (let i = 0; i < newlySortedArray.length; i++) {
    if (num <= newlySortedArray[i]) {
      return i;
      // checking if the num is BIGGER than the last element of the array, and in that case
      // the element would be put 1 index ahead of the last index of the array
    } else if (num >= newlySortedArray[newlySortedArray.length - 1]) {
      return newlySortedArray.length;
    }
  }
  //if array is blank, the index will have to be 0
  if (arr === undefined || arr.length === 0) {
    return 0;
  }

}

getIndexToIns([40, 60], 50);
// returns 1
getIndexToIns([10, 20, 30, 40, 50], 35);
// returns 3


// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function mutation(arr) {
  // splitting up the strings of the array and making them lowercase
  let string1 = arr[0].toLowerCase();
  let string2 = arr[1].toLowerCase();
  
  
  for(let i = 0; i < string2.length; i++){
      // if the index of a string is -1, it doesn't exist in that original string
      // this is looping through each character in the 2nd string,
      // and determining if it doesn't exist in the 1st string
      if(string1.indexOf(string2[i]) < 0){
          return false;
      } 
  }

  // put outside of loop to catch when EVERY single character has an index >= 0
  return true;
  
}

mutation(["hello", "hey"]);
// returns false
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
// returns true

// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function chunkArrayInGroups(arr, size) {
  let newArray = [];
  while (arr.length > 0) {
      // chops the array by the size parameter, in this case 2
      // ["a", "b", "c", "d"] becomes ["c", "d"]
      // arr.splice(0, size) is equal to ["a", "b"]
      let cutArray = arr.splice(0, size);
      // pieces of array will be sent to newArray, until the arr is completely cut through (arr.length < 0)
      newArray.push(cutArray);
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// returns [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// returns  [[0, 1, 2, 3], [4, 5, 6, 7], [8]]