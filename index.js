function submitForm(event) {
    event.preventDefault();
    var gender = document.forms["akanForm"] ["gender"].value;
    var day = document.forms["akanForm"] ["day"]. value;
    var birthYear = document.forms["akanForm"] ['birthYear'].value;
    var birthMonth = document.forms ["akanForm"] ["birthMonth"].value
    var akanName = "";

    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    var femaleNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama",
    ];

    var maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame",
    ];

    var dateObject = new Date(datestring);
    var day = dateObject.getDay(0);

    if (day != null && gender != null ) {
        if (gender === "female") {
            akanName = femaleNames [day];
        }
        else {
            akanName = maleNames [day];
        }


    }
    document.getElementById("akanName").innerHTML = akanName;

}