let userName =""
let monthNumber =""
let monthText =""
let birthYear =""
let finalAge =""
let monthCheck =""
let ageCalc =""
function userInfo() {
    userName = prompt("Hi there! What is you name?");
    if (userName =="") {
        alert("Come on! Don't be shy!");
        userName = prompt("Hi there! What is you name?");
    }
    else {
        userAge();
    }
}
function userAge() {
    monthNumber = prompt("It's great to meet you " + userName + "! \nMay I ask what month you were born in?\nPlease enter a number corresponding to the month of the year! (1-12)", 1);
    if (monthNumber >= 0 && monthNumber <= 12) {
        const date = new Date();
        const months = ["a month that you want to keep secret?", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let monthText = months[monthNumber];
        let birthYear = prompt("Cool! So you were born in " + monthText + "!\nIn what year were you born, " + userName + "?");
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        let monthMod = (month - monthNumber);
        monthMod = monthMod < 0 ? -1 : monthMod;
        monthMod = monthMod > 1 ? 0 : monthMod;
        let ageCalc = (year - (Number(birthYear) - monthMod));
        alert("Wow! No Way! That makes you " + ageCalc + " years old!?\nLooking good! You don't look a day over " + (ageCalc-1) + "!")
    }
    else {
        alert("That's not a month, you silly goose!");
        userAge();
    }
}
