//1
function wordBlanks(myNoun, myAdj, myVerb, myAdverb ){
    var results = "";
    results += "The " +myAdj+ " " +myNoun+ " " +myVerb+ " " + "to the store"+ " " +myAdverb;
    return results;
}
console.log(wordBlanks("dogs","big","ran","quickly"));

//2
function ourReuseablefunstion(){
    console.log("hello codekul")
}
ourReuseablefunstion();//calling function
//hello codekul

//3
function ourFunctionArgs(a,b){
    console.log(a-b);
}
ourFunctionArgs(10,5);//5 

//global scopes(outside the function)
//local scopes(inside teh function)


//4
var outerWear = "tshirt";
function myOutfit(){
    var outerWear ="sweater"
    return outerWear;
}
console.log(myOutfit());//op-sweater coz local overrides the global declared variables
console.log(outerWear);//tshirt

//5
function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(10));//3

//6
//stand in line
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();//removes first item
}

var testArr = [1,2,3,4,5];
console.log("Before " + JSON.stringify(testArr));//[1,2,3,4,,5]
console.log(nextInLine(testArr, 6));//1
console.log("After " + JSON.stringify(testArr));//[2,3,4,5,6]







