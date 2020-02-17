// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};


let properties = (object) => {
  for(let i in object) {
    console.log(`${i} : ${object[i]}`);
  }
} 



// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

console.log(student);
delete student.rollno;
console.log(student);


// 3. Write a function to get the length of an object.

let objectLength = (object) => {
  let sum = 0;
  for(let i in obj) {
    sum++;
  }
  return sum;
}
