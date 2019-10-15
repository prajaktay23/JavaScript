function primaryno(num){
 var numarray = [];
 for(var i=0;i<= num;i++){
     numarray.push(i);
 }

 numarray.map((number)=>{
     for(var i= 2;i<number; i++){
         if(number%i===0){
         let index = numarray.indexOf(number);
         return numarray.splice(index, 1);
         }
     }
 });
 return numarray;
}
console.log(primaryno(10));