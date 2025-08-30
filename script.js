// =====================
// Part 1: Variables & Conditionals
// =====================
let userAge = 20; // variable declaration
let userName = "Alex"; // variable declaration

// Conditional example
function checkAge(age) {
  if (age >= 18) {
    return "You are an adult.";
  } else {
    return "You are a minor.";
  }
}

// =====================
// Part 2: Custom Functions
// =====================

// Function 1: Greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome to the page.`;
}

// Function 2: Sum numbers in an array
function sumArray(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// =====================
// Part 3: Loops
// =====================

function runLoops() {
  let result = "";

  // Loop 1: For loop
  for (let i = 1; i <= 5; i++) {
    result += `For loop count: ${i}<br>`;
  }

  // Loop 2: While loop
  let j = 1;
  while (j <= 3) {
    result += `While loop count: ${j}<br>`;
    j++;
  }

  return result;
}

// =====================
// Part 4: DOM Interactions
// =====================

// DOM Interaction 1: Change inner text on button click
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greeting").innerHTML = greetUser(userName);
});

// DOM Interaction 2: Display loop results
document.getElementById("loopBtn").addEventListener("click", function() {
  document.getElementById("loopResult").innerHTML = runLoops();
});

// DOM Interaction 3: Show conditional result
document.getElementById("checkBtn").addEventListener("click", function() {
  document.getElementById("conditionalResult").innerHTML = checkAge(userAge);
});
