
//store multiple values to the array
var myArray = ["john", 23];
console.log(myArray)//["john", 23]

//array push
var ourArray = ["stimpson", "J", "cat"];
ourArray.push(["happy","joy"]);
console.log(ourArray)//["stimpson", "J", "cat" ["happy","joy"]]

//array pop
var array =[1,2,3]
var removed = array.pop();
console.log(array)//1,2

//shift function(removes the first element)
var ourArray = [1,2,3];
var removed = ourArray.shift();
console.log(ourArray)//[2,3]

//unshift function 
var ourArray = ["john", "J", "new"];
ourArray.shift();
ourArray.unshift("happy");
console.log(ourArray)//["happy", "J", "new"]