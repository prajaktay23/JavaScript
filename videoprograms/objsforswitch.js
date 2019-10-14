function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Admas",
        "bravo": "Boston",
        "charlie":"chicago",
        "delta": "denver",
        "echo": "easy",
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie"))//"chicago"

