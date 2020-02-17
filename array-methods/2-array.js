var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words) {
  let wordlength = 0;
  let longestword;

  for (let i = 0 ; i < words.length ; i++){
    if (words[i].length > wordlength){
      wordlength = words[i].length;
      longestword = words[i];
    }
    
  }
  console.log(longestword);
}

findLongestWord(words);


var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
function sumArray(numbers1){
let result = numbers1.reduce((sum, current) => sum + current, 0);
console.log(result);
}
sumArray(numbers1);

console.log(result/numbers1.length);



var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

function averageNumbers(numbers2){
  let result = numbers2.reduce((sum, current) => sum + current, 0);
  console.log(result/numbers2.length);
  }
  averageNumbers(numbers2);
  
  


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.


function averageWordLength(words2){
  let sum = 0;
  for( let i = 0 ; i < words2.length ; i++){
    sum += words2[i].length;

  }
  console.log(sum/words2.length);
}
averageWordLength(words2);