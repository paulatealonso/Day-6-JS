// NAMES AND INPUTS

const hacker1 = {
    name: 'Veneno',
}

console.log(`The driver´s name is ${hacker1.name}`);

const hacker2 = {
    name: 'Piraña',
}

console.log(`The navigator´s name is ${hacker2.name}`);

// CONDITIONALS

// console.log("The driver has got " + hacker1.name.length + " units longs");
// console.log("The driver has got " + hacker2.name.length + " units longs");


console.log("Wow, you both have equaly long names,", hacker1.name.length, "and" ,hacker2.name.length, "characters");

//LOOPS

console.log(hacker1.name.split(""));

console.log(hacker1.name.split('').reverse().join(''));



if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
  }
  else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else {
    console.log("What?! You both have the same name?")
  } 


