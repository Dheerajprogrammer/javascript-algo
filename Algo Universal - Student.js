
/*There are n students in a class. Every student can have 0 or more friends. If A is a friend of B and B is a friend of C then A and C are also friends. So we define a friend circle as a group of students who are friends as given by above definition. Given an nXn-matrix friends which consists of characters Y or N. If friends[i][j]=Y, then ith and jth students are friends, friends[i][j]=N, then i and j are not friends. Find the total number of such friend circles in the class.*/

function solution(friends){
 if (friends == null || friends.length < 1)
     return 0;
 
  let noOfCircles = 0;
 
  let visited = new Array(friends.length);
  
  for (let i = 0; i < visited.length; i++){
    visited[i] = false;
  }
  
 
  for (let i = 0; i < friends.length; i++) {
    if (!visited[i]) {
      noOfCircles++;
      visited[i] = true;
      findFriends(friends, visited, i);
    }
  }
  return noOfCircles;
}

function findFriends(friends, visited, id){
  for (let i = 0; i < friends.length; i++) {
    if (!visited[i] && i != id && '1' == friends[id][i]) {
      visited[i] = true;
      findFriends(friends, visited, i);
    }
  }
}
var array = [
  [1,1,0,0],
  [1,1,1,0],
  [0,1,1,0],
  [0,0,0,1]
];
console.log(solution(array));

function countArr(str){
  let charCount = {};
  for(let i =0; i< str.length; i++){
   char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  let min = 32000, sum=0, currentMax=null;

  for(let k in charCount){
    sum += charCount[k];
    if(charCount[k] < min)
      min = charCount[k];
  }
  let diff = sum - min*Object.keys(charCount).length;
  if ( diff >= 2 )
    return false;
  else 
    return true;
  
}
var arr = 'aabbbcccc';