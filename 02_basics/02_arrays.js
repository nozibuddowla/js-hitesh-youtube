let marvel_heroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Spider-Man', 'Black Panther', 'Doctor Strange', 'Scarlet Witch'];

let dc_heroes = ['Batman', 'Superman', 'Wonder Woman', 'The Flash', 'Aquaman', 'Green Lantern', 'Cyborg', 'Martian Manhunter', 'Green Arrow', 'Shazam'];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[10][3]);

// let all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

let all_heroes = [...marvel_heroes, ...dc_heroes];

console.log(all_heroes);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10, 11]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh", age: 25})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

