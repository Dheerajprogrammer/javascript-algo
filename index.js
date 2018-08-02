/***************JavaScript Algorithms and Data Structures Projects: Palindrome Checker*********************************/
function palindrome(str) {
  // Good luck!
  var reg = /[\W_]/g;
  var smallstr = str.toLowerCase().replace(reg, "");
   var reverse = smallstr.split("").reverse().join("");
   if( reverse === smallstr) return true;
  return false;
}



palindrome("eye");


/***********Basic Algorithm Scripting: Truncate a String************************/
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num >= str.length) return str;
  if(num <= 3) return str.slice(0, num) + "...";
  return str.slice(0, num)+'...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


/*********** Basic Algorithm Scripting: Repeat a String Repeat a String *****************************/
function repeatStringNumTimes(str, num) {
  // repeat after me
  //if(num < 0) return "";
  //return str.repeat(num);
 var final ="";
 if(num < 0) return "";

 for(var i=0; i<num; i++){
   final += str;
 }
 return final;

}

repeatStringNumTimes("abc", 3);


/***********Basic Algorithm Scripting: Confirm the Ending***************************/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
if(str.substr(-target.length)===target){
return true
}
return false
}
confirmEnding("Bastian", "n");

// return str.substr(-target.length) === target;


/****** Basic Algorithm Scripting: Return Largest Numbers in Arrays ********/

function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/*************Basic Algorithm Scripting: Find the Longest Word in a String*********************/

function findLongestWordLength(str) {
  var words = str.split(" ");
  var longest ="";

  for(var word of words){
    if(word.length > longest.length) longest = word;
  }
  return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");



/********Basic Algorithm Scripting: Factorialize a Number********************/

function factorialize(num) {
  var a = 1;
  for(var i=1; i<=num; i++){
    a *= i
  }
  return a;
}

factorialize(5);



/**************Basic Algorithm Scripting: Reverse a String***********************/

function reverseString(str) {
  return str.split("").reverse().join('');
}

reverseString("hello");