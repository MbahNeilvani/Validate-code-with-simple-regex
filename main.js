//Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

//You can assume the input will always be a number.


function validateCode (code) {
    var codeSplit = code.toString().split("");
  
    if(codeSplit[0] == "1" || codeSplit[0] == "2" || codeSplit[0] == "3"){
      return true;
    }else{
      return false;
    }
}

// Another 

function validateCode (code) {
    var str = code.toString()
      if(str[0] === "1" || str[0] === "2" || str[0] === "3"){
        return true
      }
      return false
}

