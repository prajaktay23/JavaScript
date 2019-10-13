//adding
var sum = 10 + 10;
console.log(sum)//20
//substracting
var sub = 10 - 5;
console.log(sub)//5
//multiplication
var mul = 10 * 5;
console.log(mul)//50
//division
var div = 10 / 2;
console.log(div)//5

//incrementating
var myVar = 87;
myVar = myVar + 1;
console.log(myVar)//88
myVar++;
console.log(myVar)//89

//decrementating
var myVar = 10;
myVar--;
console.log(myVar)//9

//decimal
var ourDecimal = 5.7;
var myDecimal = 0.009;

//multiplying decimals
var products =2.0 * 2.5;
console.log(products)

//compounds operators
var a=7;
a -= 6;
console.log(a)

//declare variables
var firstname = "prajakta";

//escaping literals quotes in string
var myStr = "my mane is \"prajakta\" ";
console.lo(myStr)

var myStr = 'my mane is \"prajakta\" ';

//concatinating strings
var ourStr = "i am first" + "i am second";
console.log(ourStr)//"i am first i am second"

//length of string
var firstnamelength = 0;
var firstname = "prajkata";
firstnamelength = firstname.length;
console.log(firstnamelength)//7

//index calling
var firstname = "Codekul";
var ind = firstnamelength[2];
console.log(firstname)//d

//string immutable
var myStr = "jello world";
myStr[0] = "h";
console.log(myStr)//undefined

var myStr = "jello world";
var myStr = "Hello world";
console.log(myStr)//hello world will print but on different memory address due to immutability


