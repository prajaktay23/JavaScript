var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

var animalvalue = ourDog.legs;//dot notation
console.log(animalvalue);
var animalss = ourDog["tails"];
console.log(animalss);

//update by dot notation
ourDog.name ="happy camper";
console.log(ourDog)

//adding properties using dot notation 
ourDog['bark']="bow-wow";//ourDog.bark = "bow-wow";
console.log(ourDog);

//delete by dot notation
delete ourDog.bark;
console.log(ourDog);


