const fs = require("fs");

function getData(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, "utf-8", function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function getDirectoryFiles(dirName) {
  return new Promise(function (resolve, reject) {
    fs.readdir(dirName, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

// getData("./test.txt").then(console.log, console.log);
module.exports = { getData, getDirectoryFiles };
