var contacts = [{
    "firstname": "Akira",
    "lastname": "laine",
    "number": "08809734366",
    "likes": ["pizza", "coding", "brownie points"]
},
{
    "firstname": "harry",
    "lastname": "porter",
    "number": "2459516464690",
    "likes": ["hogwarts", "magic", "brownie"]
},
{
    "firstname": "sherlock",
    "lastname": "holmes",
    "number": "8497964690",
    "likes": ["intriguing cases", "violin"]
}
];

function lookupprofile(name, prop){
 for(var i=0; i<contacts.length;i++){
     if(contacts[i].firstname === name){
         return contacts[i][prop] || "no such property";
     }
 }
 return "no such contacts"
}
var data = lookupprofile("Akira", "likes");
console.log(data);
