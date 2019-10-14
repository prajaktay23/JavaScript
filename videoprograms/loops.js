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



