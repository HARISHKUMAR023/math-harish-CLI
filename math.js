#!/usr/bin/env node

const { program } = require('commander');
const figlet = require('figlet');

// Display the ASCII art for the app name
figlet('Math CLI', (err, data) => {
  if (!err) {
    console.log(data);

    // Start parsing the command-line arguments after displaying the ASCII art
    program
      .version('1.0.0')
      .description('Simple Math CLI Application \n 🌏 Developed By Harish 💻');
      
    program
      .command('add <num1> <num2>')
      .description('Add two numbers')
      .action((num1, num2) => {
        const result = parseFloat(num1) + parseFloat(num2);
        console.log(`Result: ${result}`);
      });

    program
      .command('sub <num1> <num2>')
      .description('Subtract two numbers')
      .action((num1, num2) => {
        const result = parseFloat(num1) - parseFloat(num2);
        console.log(`Result: ${result}`);
      });

    program
      .command('mul <num1> <num2>')
      .description('Multiply two numbers')
      .action((num1, num2) => {
        const result = parseFloat(num1) * parseFloat(num2);
        console.log(`Result: ${result}`);
      });

    program
      .command('div <num1> <num2>')
      .description('Divide two numbers')
      .action((num1, num2) => {
        if (parseFloat(num2) !== 0) {
          const result = parseFloat(num1) / parseFloat(num2);
          console.log(`Result: ${result}`);
        } else {
          console.log('Error: Cannot divide by zero!');
        }
      });

    program.parse(process.argv);
  }
});
