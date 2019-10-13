//1
//if statement
function ourif(isItTrue){
    if(isItTrue){
        return "yes, it is true";
    }
    return "no, it is false";
}
console.log(ourif(true));//yes, it is true

//2
function testEquals(val){
    if(val == 12){
        return "equals";
    }
    return "not equals";
}
console.log(testEquals(12));//equals
console.log(testEquals("12"));//equals
console.log(testEquals(1));//not equals

//3
function testStrict(val){
    if(val === 3){
        return "equals";
    }
    return "not equals";
}
console.log(testStrict("3"));//notequals
console.log(testStrict(3));//equals



