//while loops
var myArray = [];

var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray);

//for loops
var ourArray = [];
for(var i=0; i<5; i++){
    ourArray.push(i);
}
console.log(ourArray);

//odd no for loop
var ourArray =[];
for(var i=0;i<10; i+=3){
    ourArray.push(i);
}
console.log(ourArray);//0,3,6,9

//even no for loop
var ourArray =[];
for(var i=0;i<10; i+=2){
    ourArray.push(i);
}
console.log(ourArray);//0,2,4,6,8

//backwords loop
var ourArray = [];
for(var i=10;i>0;i -=2){
    ourArray.push(i);
}
console.log(ourArray);

// 
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for(var i=0; i< ourArr.length;i++){
    ourTotal += ourArr[i];
}
console.log(ourTotal);

//nesting loops
function multiplyAll(arr){
    var product = 1;
    for(var i=0; i<arr.length;i++){
        for(var j=0; j< arr[i].length; j++){
            product *= arr[i][j];
        }
    }
        return product;
}
var product =multiplyAll([[1,2], [3,4], [5,6,7]]);
console.log(product);

//do while loop
var myArray =[];
var i = 10;
do{
    myArray.push(i);
    i++;
}while(i<5)
console.log(myArray);






