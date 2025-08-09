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


// function loginUserMessage(username = "sam") {
//     if (!username) {
//         console.log(`Please enter a username`);
//         return
//     } else {
//         return `Welcome, ${username}`;
//     }
    
// }

// console.log(loginUserMessage("hitesh"));


const user = {
    username: "hitesh",
    price: 199
}

// function handleObject(anyObject) {
//     console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
    
// }
// // handleObject(user);
// handleObject({username: "kullu", price: 398});

const myNewArray = [200, 400, 10, 6000];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
