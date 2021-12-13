var CC, YY, MM, DD, d, dayValue;
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

function calculateDayValue(){
    year = document.getElementById("year").value;
    YY= parseInt (year.substring (2,4));
    MM = parseInt (document.getElementById ("birth-month").value);
    DD = parseInt (document.getElementById ("birth-day"). value); 
    d = ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7)
}