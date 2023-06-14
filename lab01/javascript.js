let userName =""
let monthNumber =""
let monthText =""
let birthYear =""
let finalAge =""
let ageCalc =""
function userInfo() {
    userName = prompt("Hi there! What is you name?");
    console.log(userName);
    if (userName == "") { 
        alert("Come on! Don't be shy!");
        userInfo();
    }
    else {
    userMonth();
    }
}
function userMonth() {
    let monthNumber = prompt("It's great to meet you " + userName + "! \nMay I ask what month you were born in?\nPlease enter a number corresponding to the month of the year! (1-12)", 1);
    console.log(monthNumber);
    const months = ["a month that you want to keep secret?", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (monthNumber >= 0 && monthNumber <= 12) {
        let monthText = (months)[monthNumber];
        const date = new Date();
        console.log(date);
        var month = date.getMonth();
        console.log(Number(month));
        let monthCheck = Number((months)[month]);
        console.log(monthText);
        console.log(Number(monthCheck));
        let birthYear = prompt("In what year were you born, " + userName + "?");
        console.log(Number(birthYear));
        var year = date.getFullYear();
        console.log(Number(year));
        let ageCalc = (year - birthYear) + (month - monthCheck);
        console.log(Number(ageCalc));
        alert("Wow! No Way! That makes you " + ageCalc + " years old!?\nLooking good! You don't look a day over " + (ageCalc-1) + "!")
    }
    else {
        alert("That's not a month, you silly goose!")
        userMonth();
    }
}
