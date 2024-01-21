const fs = require('fs');
const path = require('path');
const pathToFolder = path.join(__dirname, 'files');

const copyDir = () => {
  fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
    if (err) console.error(err);
    console.log('Directory created successfully!');
  });

  const pathToCopyFolder = path.join(__dirname, 'files-copy');

  fs.readdir(pathToFolder, { withFileTypes: true }, (err, files) => {
    if (err) console.log(err);
    files.forEach((file) => {
      fs.copyFile(
        path.join(pathToFolder, file.name),
        path.join(pathToCopyFolder, file.name),
        (err) => {
          if (err) console.error(err);
          console.log(`${file.name} created successfully!`);
        },
      );
    });
  });
};

copyDir();
