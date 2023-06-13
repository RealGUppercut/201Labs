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
        console.log(monthText);
        let birthYear = prompt("So you were born in " + monthText + "? Cool! \nWhat year were you born?");
        console.log(Number(birthYear));
        const date = new Date();
        console.log(date);
        var year = date.getFullYear();
        console.log(year);
        let ageCalc = year - Number(birthYear);
        console.log(ageCalc);
        alert("Wow! No Way! That makes you " + ageCalc + " years old!?\nLooking good! You don't look a day over " + (ageCalc-1) + "!")
    }
    else {
        alert("That's not a month, you silly goose!")
        userMonth();
    }
}
