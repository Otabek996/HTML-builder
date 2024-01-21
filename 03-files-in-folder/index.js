const fs = require('fs');
const path = require('path');
const { stdout } = process;
const pathToFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFolder, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err.message);
  files.forEach((file) => {
    const filePath = path.join(pathToFolder, file.name);
    const fileName = path.parse(filePath).name;
    const fileExt = path.parse(filePath).ext.slice(1);
    fs.stat(filePath, (err, stats) => {
      if (err) console.log(err);
      stdout.write(`${fileName} - ${fileExt} - ${stats.size / 1000}kb\n`);
    });
  });
});
