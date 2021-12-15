// var button = document.getElementById ("button")
// on click = "function to execute()"
//     console.log(birthday);

object.onclick = function() {myScirpt}


    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
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
function getGender (){
    var genders = document.getElementsByName ("gender")
    if (genders[0].checked == true){
        var gender = "female";
    }
    else if (genders[1].checked == true){
        var gender = "male";
    }
    else{
        return false;
    }
}
switch(gender){
    case "female":
    if (dayValue === 1){
        alert('Born on' + dayNames[0] + ' so your Akan name is ' +femaleNames[0]+"!");
    }
    else if (dayValue == 2) {
        alert('Born on' + dayNames[1] + ' so your Akan name is ' +femaleNames[1]+"!");
    }
    else if (dayValue == 3) {
        alert('Born on' + dayNames[2] + ' so your Akan name is ' +femaleNames[2]+"!");
    }
    else if (dayValue == 4) {
        alert('Born on' + dayNames[3] + ' so your Akan name is ' +femaleNames[3]+"!");
    }
    else if (dayValue == 5) {
        alert('Born on' + dayNames[4] + ' so your Akan name is ' +femaleNames[4]+"!");
    }
    else if (dayValue == 6) {
        alert('Born on' + dayNames[5] + ' so your Akan name is ' +femaleNames[5]+"!");
    }
    else if (dayValue == 0) {
        alert("Born on " + dayNames[6] + ' so your Akan name is ' +femaleNames[6]+"!");
    }
    
    break;
    case "male":
    if (dayValue == 1){
        alert(' Born on '  +dayNames[0] + ' so Your akan name is ' +maleNames[0]+"!");
    }
    else if (dayValue == 2){
        alert(' Born on ' + dayNames[1] + ' so your Akan name is ' +maleNames[1]+"!");
    }
    else if (dayValue == 3){
        alert(' Born on ' + dayNames[2] + ' so your Akan name is ' +maleNames[2]+"!");
    }
    else if (dayValue == 4){
        alert(' Born on ' + dayNames[3] + ' so your Akan name is ' +maleNames[3]+"!");
    }
    else if (dayValue == 5){
        alert(' Born on ' + dayNames[4] + ' so your Akan name is ' +maleNames[4]+"!");
    }
    else if (dayValue == 6){
        alert(' Born on ' + dayNames[5] + ' so your Akan name is ' +maleNames[5]+"!");
    }
    else if (dayValue == 0){
        alert(' Born on ' + dayNames[6] + ' so your Akan name is ' +maleNames[6]+"!");
    }
    break
    default:
    
    }

    // finding the akan name

function nameFind () {
    dayValue = calculateDayValue();
    getGender();
}