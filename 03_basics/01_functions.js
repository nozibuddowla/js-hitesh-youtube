function sayMyName() {
    console.log("A");
    console.log("r");
    console.log("n");
    console.log("o");
    console.log("b");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//     let sum = number1 + number2; 
//     return sum;
// }
// let result = addTwoNumbers(1, 2)
// console.log(result);


function loginUserMessage(username = "sam") {
    if (!username) {
        console.log(`Please enter a username`);
        return
    } else {
        return `Welcome, ${username}`;
    }
    
}

// console.log(loginUserMessage("hitesh!"));
console.log(loginUserMessage("hitesh"));