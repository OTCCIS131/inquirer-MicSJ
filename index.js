var inquirer = require('inquirer')
var chalk = require('chalk')

let questions = size = { 
    type: "list",
    name: "size",
    message: "What size of pizza",
    default: "Small",
    choices: ["Small", "Medium", "Large"]}

inquirer.prompt(questions).then(function(answers){
    
})

Console.log(size);