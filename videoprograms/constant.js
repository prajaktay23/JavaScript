function printmanytimes(str){
    "use strict";
    const sentence = str + "is cool!";
    sentence = str + "is amazing!";//cant assign again a constant things and use all capital leters

    for(var i=0;i<str.length;i +=2){
        console.log(sentence);
    }

}
printmanytimes("freecodecamp");
//cant change or update the array if it is declared constant

function freezeobj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.142
    };
    Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI = 99;
    }
    catch(ex){
console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeobj();
console.log(PI);