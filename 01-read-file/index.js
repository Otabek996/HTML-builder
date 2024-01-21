const fs = require('node:fs');
const path = require('node:path');

const pathToText = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(pathToText);

stream.on('data', (data) => process.stdout.write(data));
