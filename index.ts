#! /usr/bin/env node
import inquirer from "inquirer";

// List of the currencies and their exchange rates
let exchange_rate: any  =  {
    "USD" : 1 , //USA dollar
    "EUR" :0.9, //Europien Euro
    "PKR" :280, //pakistani rupee
    "LIRA":33, //Turkish lira
    "Dirham":6.5,  //UAE
    "CAD" : 1.3,  //Canidian Dollar
}

let user_answer = await inquirer.prompt([
    {
        name:"from_currency" ,
        type:"list" ,
        message: "Select the currency to convert from:" ,
        choices: ["USD" , "EUR" ,"PKR" , "LIRA" , "Dirham" , "CAD"]
     },

     {
        name:"to_currency",
        type: "list" ,
        message: "Select the currency to convert into:",
        choices: ["USD" , "EUR" ,"PKR" , "LIRA" , "Dirham" , "CAD"]

     },
     {
        name:"amount" ,
        type:"input" ,
        message:"Enter the amount to convert:"
     }
]);

//Formula for currency conversion
let from_amount  =  exchange_rate[user_answer.from_currency];
let to_amount  =  exchange_rate[user_answer.to_currency];
let amount  =  user_answer.amount

//Formula of conversion
let base_amount  =  amount  /  from_amount
let converted_amount  =  base_amount  *  to_amount

// Console 
console.log(`Converted Amount  =  ${converted_amount.toFixed(2)}`);
