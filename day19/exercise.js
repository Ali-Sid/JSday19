// Exercise: Level 1

// 1. Create a closure which has one inner function

function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    return count;
  }
  return innerFunction();
}

console.log(outerFunction());
// Output: 1

// Exercise: Level 2

// 1. Create a closure which has three inner functions

function newOuterFunction() {
  let count = 0;

  function countOne() {
    count++;
    return count;
  }
  function countTwo() {
    count--;
    return count;
  }
  function countThree() {
    count++;
    return count;
  }
  return {
    countOne: countOne(),
    countTwo: countTwo(),
    countThree: countThree(),
  };
}

console.log(newOuterFunction().countOne); // 1
console.log(newOuterFunction().countTwo); // 0
console.log(newOuterFunction().countThree); // 1

// Exercises: Level 3

// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(firstname, lastname) {
  let incomes = new Map();
  let expenses = new Map();
  // The first two variables, incomes and expenses, are implemented as Map objects. A Map is a built-in object in JavaScript that allows you to store key-value pairs, where each key can only appear once in the map. In this case, the keys are the descriptions of the incomes and expenses, while the values are the amounts.

  let totalIncome = 0;
  let totalExpense = 0;
  // These variables will be used to keep track of the total amount of income and expense, respectively.

  // Next, there are four inner functions defined - addIncome, addExpense, accountBalance, and accountInfo.

  function addIncome(description, amount) {
    totalIncome += amount;
    if (incomes.has(description)) {
      incomes.set(description, incomes.get(description) + amount);
    } else {
      incomes.set(description, amount);
    }
  }

  //The addIncome function takes in two parameters - description and amount - and adds the income to the incomes map. It also updates the totalIncome variable by adding the new income amount to the current total income. If an income with the same description already exists in the incomes map, the function will update the existing income amount instead of adding a new income.

  function addExpense(description, amount) {
    totalExpense += amount;
    if (expenses.has(description)) {
      expenses.set(description, expenses.get(description) + amount);
    } else {
      expenses.set(description, amount);
    }
  }

  function accountBalance() {
    return totalIncome - totalExpense;
  }

  function accountInfo() {
    console.log("----------------------");
    console.log(`Name: ${firstname} ${lastname}`);
    console.log("Income:");
    incomes.forEach((value, key) => console.log(`${key}: ${value}`));
    console.log(`Total Income: ${totalIncome}`);
    console.log("----------------------");
    console.log("Expenses:");
    expenses.forEach((value, key) => console.log(`${key}: ${value}`));
    console.log(`Total Expense: ${totalExpense}`);
    console.log("----------------------");
    console.log(`Account Balance: ${accountBalance()}`);
    console.log("----------------------");
  }

  return {
    addIncome,
    addExpense,
    accountBalance,
    accountInfo,
  };
}

const myAccount = personAccount("Ali", "Siddiqui");

myAccount.addIncome("Salary", 50000);
myAccount.addIncome("Bonus", 10000);
myAccount.addExpense("Rent", 20000);
myAccount.addExpense("Food", 5000);
myAccount.addExpense("Transportation", 2000);

myAccount.accountInfo();

/*

----------------------
Name: Ali Siddiqui
Income:
Salary: 50000
Bonus: 10000
Total Income: 60000
----------------------
Expenses:
Rent: 20000
Food: 5000
Transportation: 2000
Total Expense: 27000
----------------------
Account Balance: 33000
----------------------
*/
