f
//day validator
function dayValidator(){
    if (monthOfBirth ===2 && Number(yearofBirth)%4===0)
        if (dayOfBirth > 28 || dayOfBirth < 1) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth > 29) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth < 1) {
            return false;
          } else {
            return true;
          }
        } else if (dayOfBirth < 1 || dayOfBirth > 31){
          return false;
        } else {
          return true;
        }
      }
    
      //validation variables
      let monthValid = monthValidator();
      let dayValid = dayValidator();
    
      //formula to determine day of birth (Sunday = 1, Monday = 2)etc..
      let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
              ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
    
      //creating arrays of Akan names for males and females
      let maleAkanNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"
      ];
    
      let femaleAkanNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
      ];
    
    }
}

//generating and index value to select items on arrays
let index;
// fix formula bug
if (dayOfWeekNumber == 0){
  index = 6;
} else {
  index = dayOfWeekNumber - 1;
}

console.log(index);

if (myGenderValue == "male" && monthValid && dayValid) {
  document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
  document.getElementById('display-name').textContent = "Here is your Akan name: ";
  document.getElementById('result').style.fontSize = "18px";
  document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[index];
  return false;
} else if (myGenderValue == "female" && monthValid && dayValid) {
  document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
  document.getElementById('display-name').textContent = "Here is your Akan name: ";
  document.getElementById('result').style.fontSize = "18px";
  document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[index];
  return false;
} else {
  alert("You entered an invalid day or month, please try again");
}
}
