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
