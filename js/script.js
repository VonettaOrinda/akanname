function getAkanName( ){
    let yearofBirth= document.getElementById("year-input").value;
    let monthofBirth= Number (document.getElementById("month-input").value;
    let dayOfBith= Number(document.getElementById("day-input").value;

    let genders = document.getElementById("gender");

    //function to get gender
    function getGender(){
        for ( let gender of genders){
            if(gender.checked){
                return gender.value;
            }
        }
    }

    let myGenderValue = getGender();

    console.log(myGenderValue);

    //month validation functions
    function monthValidator(){
        if(monthOfBirth < 1 || monthOfBirth >12{
            return false;
        } else{
            return true;
        }
    }

}
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
