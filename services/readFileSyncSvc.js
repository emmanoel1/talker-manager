const fs = require('fs');

function readFileSyncSvc(fileLocation) {
  const jsonFile = fs.readFileSync(`${fileLocation}`);
  const readed = JSON.parse(jsonFile);
  return readed;
}

module.exports = readFileSyncSvc;
