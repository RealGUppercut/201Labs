function userInfo() {
    let userName = prompt("Hi there! What is you name?");
    console.log(userName);
    if (userName == "") 
    { 
    alert("Come on! Don't be shy!");
    return userInfo();
    }
    else {
    let birthMonth = prompt("It's great to meet you " + userName + "! \nMay I ask what month you were born in? (1-12)", 1);
    console.log(birthMonth);
    const months = ["a month that you want to keep secret?", "January", "Ferbrury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (birthMonth >= 0 && birthMonth<= 12) {
    let monthText = (months)[birthMonth];
    console.log(monthText);
    let birthYear = prompt("So you were born in " + monthText + "? Cool! \nWhat year were you born?");
    }
    else { 
    alert("That's not a month, you silly goose!")
    }
    
    }
}