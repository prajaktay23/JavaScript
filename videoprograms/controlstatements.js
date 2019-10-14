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

//same for not equal to !=, !==
//<= >= > < 
// || && !   

//4 
function testElseIf(val){
    if(val > 9){
        return "greater than 9";
    }
    else if(val<5){
        return "smaller than 5";
    }
    return "between 5 and 9";
}
console.log(testElseIf(7));//between 5 and 9

//switch statement


