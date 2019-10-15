function primeArr(arr) {
  
    //Test for Prime Number
    
    function isPrime(testNo){
    
      var result = false;
      for(var n = testNo - 1; n > 1; n--){
          result = (testNo % n === 0) + result;
      }
      
      if(result === 0 && testNo > 1){
        return true;
      }return false;
    }
    
    //Test for Prime Number
   
    var newArr = []; 
    
    for(n=0; n<arr.length; n++){
      if(isPrime(arr[n])){
        newArr.push(arr[n]);
      }
    }
    
   newArr;
  }