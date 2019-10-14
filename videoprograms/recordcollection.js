var collection  = {
    "2543": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it rock",
        "you give love a bad name"
    ]
    },
    "2345":{
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
    ]
    },
    "1234":{
        "album": "Pobert palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
    }
};
var collectionCopy =JSON.parse(JSON.stringify(collection));//copy of the objects

function updateRecord(id, prop, value){
    if(value === ""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection;
}

 console.log(updateRecord(5439, "artist", "ABBA"));