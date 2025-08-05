// singleton
// Object.create

// object literals

const mySym = Symbol('key1');

const jsUser = {
    name: "Jitu",
    "full name": "Jitu Singh",
    [mySym]: "value1",
    age: 25, 
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

jsUser.email = "hitesh@gpt.com";
// console.log(jsUser.email);
// console.log(jsUser);

// Object.freeze(jsUser);
jsUser.email == "hitesh@microsoft.com";
// console.log(`after freezing the object: ${jsUser.email}`);
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS User!");
}

jsUser.greetingTwo = function () {
    console.log(`Hello JS User! ${this.name}`);
}

// console.log(jsUser.greeting());
// console.log(jsUser.greeting);

jsUser.greeting();
jsUser.greetingTwo();
