// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//Ran jest and it failed as planned

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// //I want to write a fuction that contains a conditional statement to meet the condition if an input number is divisible by 3
// const divisibleByThree = (num) => {
//   //This will define the functiion annd give it an input
//   if (num % 3 === 0){
//     //The first condition checks to see if the number is divisible by 3 using the modulo operator. If an input number is divided by 3 and has no remainder it is divisible by three. 
//     return `${num} is divisible by three`
//     //This statement will log to the console if the first condition met evaluates to true.
//   } else {
//     //This else statement catches all other inputs that are not numbers divisible by 3.
//     return `${num} is not divisible by three`
//   }//The return statement if the first condition is not met.
// }


//Refactored code moved above line 39 to make test pass. Function must be defined in order to pass test. See lines 80-87 for refactored code with psuedo code. 
const divisibleByThree = (num) => {
  if (num % 3 === 0) {
    return `${num} is divisible by three`;
  }
  return `${num} is not divisible by three`
}

var num1 = 15

describe("divisibleByThree", () => {
  it("returns a string of `15 is divisible by three` if a number is divisible by 3 or not based on a number input", () => {
    expect(divisibleByThree(num1)).toEqual(`15 is divisible by three`)
  })
})

console.log(divisibleByThree(num1))
// Expected output: "15 is divisible by three"



var num2 = 0
console.log(divisibleByThree(num2))
// Expected output: "0 is divisible by three"

describe("divisibleByThree", () => {
  it("returns a string of `0 is divisible by three` if a number is divisible by 3 or not based on a number input", () => {
    expect(divisibleByThree(num2)).toEqual(`0 is divisible by three`)
  })
})

var num3 = -7
console.log(divisibleByThree(num3))
// Expected output: "-7 is not divisible by three"

describe("divisibleByThree", () => {
  it("returns a string of `-7 is not divisible by three` if a number is divisible by 3 or not based on a number input", () => {
    expect(divisibleByThree(num3)).toEqual(`-7 is not divisible by three`)
  })
})


// b) Create the function that makes the test pass.

// //Refactored function copied to line 35-40
// const divisibleByThree = (num) => {
//   if (num % 3 === 0) {
//     return `${num} is divisible by three`;
//     //refactored the code to be slightly more concise by adding the ";" to stop the function when the if condition returns true.
//   }
//   return `${num} is not divisible by three`
//   //An else statememt is not needed when using the ";" operator/symbol in the preceding "if" condition. Whenever the if condition is not met, the function will run to the next line of code. 
// }
// //Refactored function copied to line 35-40


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//Declare a function that iterates over an array
const capitalPunishment = (array) => {
  //Use the .map higher order function to apply an operation over every value in the array.
  return array.map(value => value.charAt(0).toUpperCase() + value.slice(1))
  //The first index of each string on the array will be the first letter, to change the first letter I used the .charAt(0) and applied the .toUppercase methods to capitalize the first letter. Adding the capitalised letter to the same string I used the .slice method to create a string missing the first index/first letter. .slice(1) on a string will create a string missing the first letter/index. 
};


// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
console.log(capitalPunishment(randomNouns1));

describe("capitalPunishment", () => {
  it("returns a new array with all string elements capitalized", () => {
    expect(capitalPunishment(randomNouns1)).toContain( "Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew" )
  })
})

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
console.log(capitalPunishment(randomNouns2));


describe("capitalPunishment", () => {
  it("returns a new array with all string elements capitalized", () => {
    expect(capitalPunishment(randomNouns2)).toContain( "Temperature", "Database", "Chopsticks", "Mango", "Deduction" )
  })
})

// b) Create the function that makes the test pass.

//From the lecture and notes this seems to be the shortest, most succinct code to return this output. All other examples use more lines of code and more statements. The function is declared on line 93-97 before the test so it recogizes the function. 



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// //Declare a funtion that takes the input of string
// const firstVow = (string) => {
//   //I want this function to operate over the input string to check for the first vowel, so I'll have to define what a vowel is. 
//   let vowels = 'aeiouAEIOU'
//   //My new variable tells the function what all of the vowels are, so now we need to make an operation that tests for these specific characters on the input string. Iteration seems like the best way to do this. 
//   for (i=0; i<string.length; i++) {
//     //This will iterate over the string at each letter. Because javascript reads a string similar to an array with each letter of the string having an assigned index, I used the same iteration technique that loops over an array. Starting at the first index/letter [0], iterate over the string up until the last index of the string or the .length of the string, and continue to iterate each time one index higher or index + 1 or index ++. 
//     for (j=0; j<vowels.length; j++) {
//       //Because I have two strings that I want to compare to each other, I will use the same iteration method over my new variable of vowels alongside the first iteration. 
//       //I want to find out the first occurence at which index on input string matches any of the letters on  my vowels variable string. A conditional statement can be used to compare the two strings.
//       if(string[i]===vowels[j]){
//         //If the iteration is working correctly it should evaluate to true when the index/letter of the input string is equal to an index/letter of the vowels string.
//         //At the point where these characters match I want to return the index value on the input string.
//         return string.indexOf(string[i]);
//       }
//     }
//   }
// };

const firstVow = (string) => {
  let vowels = 'aeiouAEIOU'
  for (i=0; i<string.length; i++) {
    for (j=0; j<vowels.length; j++) {
      if(string[i]===vowels[j]){
        return string.indexOf(string[i]);
      }
    }
  }
};

var vowelTester1 = "learn"
// Expected output: 1
console.log(firstVow(vowelTester1))

describe("firstVow", () => {
  it("returns a number of the index value of the first value from the input string", () => {
    expect(firstVow(vowelTester1)).toEqual(1)
  })
})

var vowelTester2 = "academy"
// Expected output: 0
console.log(firstVow(vowelTester2))

describe("firstVow", () => {
  it("returns a number of the index value of the first value from the input string", () => {
    expect(firstVow(vowelTester2)).toEqual(0)
  })
})

var vowelTester3 = "challenges"
// Expected output: 2
console.log(firstVow(vowelTester3))

describe("firstVow", () => {
  it("returns a number of the index value of the first value from the input string", () => {
    expect(firstVow(vowelTester3)).toEqual(2)
  })
})

// b) Create the function that makes the test pass.

//Refactoring I will attempt to use the while statement to make the function more concise.

// const firstVow = (string) => {
//   let vowels = "aeiouAEIOU"
//   let i = 0
//   let j = 0
//   while(i < string.length && j < vowels.length){
//     if(string[i] === vowels[j]) j++;
//     i++;
//   }
//   return string.indexOf(string[i])
// };

//My understanding of while statements is still outside of my current skillset. Attempts at using the refactored code continued to return undesireable results that failed the test. So I will stick with my current working version of the code. Refactored without comments on lines 152-161. 