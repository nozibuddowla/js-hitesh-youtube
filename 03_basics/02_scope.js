// let a = 10;
// const b = 20;
// var c = 30;

// var c = 300;
// let c = 300;

let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    // c = 30;
    // console.log(`Inner: ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);
        
    }
    console.log(website);
    two();
}
one();