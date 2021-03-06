var inquirer = require('inquirer')
var chalk = require('chalk')

let questions = [{ 
    type: "list",
    name: "size",
    message: "What size of pizza?",
    default: "Small",
    choices: ["Small", "Medium", "Large"]},
    {type: "list",
    name: "sauce",
    message: "What type of sauce?",
    defualt: "Marinara",
    choices: ["Marinara", "BBQ", "Alfredo"]},
    {type: "checkbox",
    name: "toppings",
    message: "What toppings?",
    default: "Plain Cheese",
    choices: [" Plain Cheese", " Pepperoni", " Sausage", " Bell Peppers", " Olives", " Mushrooms"]},
    // {type: "list",
    // name: "check",
    // message: "Is your order correct?",
    // choices: ["yes", "no"]}
    ]

console.log(chalk.blue("Welcome to Hungry Hippos' Pizza!"))

inquirer.prompt(questions).then(function(answers){
    console.log(chalk.magenta("Your order is a " + answers.size + " pizza with " + answers.sauce + " and" + answers.toppings))
    
    inquirer.prompt({type: "list", name: "check", message: "Is your order correct?", choices: ["yes", "no"]}).then(function(answers){
        if(answers.check == "yes"){
            console.log(chalk.magenta("It's on its way!!"))
        }
        if(answers.check == "no"){
            console.log(chalk.red("We apologize for the inconvenience."))
        }
    })
})
