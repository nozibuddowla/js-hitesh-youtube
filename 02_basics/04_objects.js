// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            first: "John",
            last: "Doe"
        }
    }
}

// console.log(tinderUser);
// console.log(regularUser.fullname?.userFullname.first);

const obj1 = {
    brand: "Apple",
    model: "iPhone 14",
    price: 999,
    inStock: true,
    specs: {
        storage: "128GB",
        color: "Midnight",
        camera: "12MP"
    }
};

const obj2 = {
    brand: "Samsung",
    model: "Galaxy S23",
    price: 899,
    inStock: false,
    specs: {
        storage: "256GB",
        color: "Phantom Black",
        camera: "50MP"
    }
};

const obj4 = {
    brand: "OnePlus",
    model: "OnePlus 12",
    price: 749,
    inStock: true,
    specs: {
        storage: "512GB",
        color: "Emerald Green",
        camera: "64MP"
    }
};

// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2, ...obj4};

// console.log(obj3);


const users = [
    { id: 1, name: "John", email: "john@email.com", age: 25 },
    { id: 2, name: "Jane", email: "jane@email.com", age: 30 },
    { id: 3, name: "Alice", email: "alice@email.com", age: 28 },
    { id: 4, name: "Bob", email: "bob@email.com", age: 35 },
    { id: 5, name: "Charlie", email: "charlie@email.com", age: 22 },
    { id: 6, name: "Diana", email: "diana@email.com", age: 27 }
];

users[2].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
