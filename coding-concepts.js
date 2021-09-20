// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.split(""))

// a) Your answer: This will log an array of the input string with each letter being it's own element. ['D','e', 'l', 't', 'a','', '2', '0', '2', '1']
// b) Verify and explain: I was mostly correct. The console logged the string as an array with each letter being an element. My only mistake on the prediction was that the fifth index of '' was actually ' '.  


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This will log "Hello, LEARN Student". The console takes the function of greeter and logs the argument of name. The function greeter takes the input of name then uses string iterpolation to add the input name string into the phrase "Hello, (input name)!"
// b) Verify and explain: I was incorrect. It returns undefined because the function needs a return value to log the variable. Without a return value the function doesn't store the data of `Hello, ${name}!` to be called on later. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: Undefined. The function needs to be called on and cannot be used on an array in this fashion. 
// b) Verify and explain: I was wrong. The fashion/method used on the array can be used. It takes the values of the array and uses the .map higher order function to change the values of each element on the array by multiplying each value by 2. 


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: [12, 14]. This will use the .filter higher order function to change the value of each element on the oddsOnly array to only contain values that have a remainder of 0 when divided by two (even numbers). 
// b) Verify and explain: I was correct. The .filter higher order function changes the value of each element on the oddsOnly array to only contain values that have a remainder of 0 when divided by two (even numbers). 


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This will log an object with the following values:
// ['George', 
// 'Delta', 
// 2021]
// b) Verify and explain: I was 50% correct (or 50% incorrect depending on your outlook). I did not include the keys on the predicted object. The "new" command created a new object with the class of Learn. It took the input of "George" as the name and assigned the value to the "student" key. The "new" command built the object with the "George" input using the "Learn" class blueprint and logged it to the console using the console.log. 
