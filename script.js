var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];


function calculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt (year.substring (0,2));
    YY = parseInt (year.substring (2,4));
    MM = parseInt (document.getElementById ("month").value);
    DD = parseInt (document.getElementById ("day"). value); 
    d = ( (CC/4) -2*CC+1) + ( (5*YY/4)) + ((26*(MM+1)/10) + DD)%7;
    console.log(d)
    return (Math.floor(d));
}

// defining the gender
function getGender (dayValue){
    var gender;
    var genders = document.getElementsByName ("gender")
    if (genders[0].checked == true){
        gender = "female";
    }
    else if (genders[1].checked == true){
        gender = "male";
    }
    else{
        return false;
    }
    var akanName;
    var day = dayNames [dayValue]
    switch(gender) {
        case "female":
            akanName = femaleNames[dayValue];
            break
        case "male":
            akanName = maleNames [dayValue];
            break
        default:
            alert("Enter correct values");
            break;
    }
    return [akanName, day];
        }
    // finding akanName
    function getAkanName () {
        var dayValue = calculateDayValue();
        console.log(getGender(dayValue))
        var name_day = getGender(dayValue);
        alert("You were born on " + name_day[1] + " and Your akan name is " + name_day[0]+"!");
        span = document.getElementById ("akanName");
        span.texContent = name_day [0];
    }