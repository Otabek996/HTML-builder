const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;

const pathToText = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(pathToText);

stdout.write('Hello, type something:\n');

const processExit = () => {
  stdout.write('\n Goodbye.\n');
  exit();
};

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') processExit();
  output.write(`${data.toString().trim()} `);
});

process.on('SIGINT', processExit);
