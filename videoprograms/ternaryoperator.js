function checkEqual(a,b){
    return a===b ? true: false;
}

//multiple condition 
function checksign(num){
    return num > 0 ? "positive" : num<0 ? "negative" : "zero"
}
console.log(checksign(0));