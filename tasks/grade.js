function grade(percentage){
 if(percentage>=80 && percentage<=100){
     return "A grade";
 }else if(percentage<80 && percentage >=60){
     return "B grade";
 }else if(percentage<60 && percentage>=35){
     return "C grade";
 }else if(percentage<35 && percentage>=0){
     return "FAIL";
 }else{
     return "error";
 }
}
console.log(grade(90));