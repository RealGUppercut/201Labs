function userInfo() {
    let userName = prompt("Hi there! What is you name?");
    console.log(userName);
    if (userName == "") { 
        alert("Come on! Don't be shy!");
        return userInfo();
    }
    else {
        let monthNumber = prompt("It's great to meet you " + userName + "! \nMay I ask what month you were born in? (1-12)", 1);
        console.log(monthNumber);
        const months = ["a month that you want to keep secret?", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if (monthNumber >= 0 && monthNumber <= 12) {
            let monthText = (months)[monthNumber];
            console.log(monthText);
            let birthYear = prompt("So you were born in " + monthText + "? Cool! \nWhat year were you born?");
            console.log(birthYear);
        }
        else { 
            alert("That's not a month, you silly goose!")
        }
        
    }
}
