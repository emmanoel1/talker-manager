const fs = require('fs/promises');

async function readFileSvc(fileLocation) {
  const jsonFile = await fs.readFile(`${fileLocation}`, 'utf8');
  const readed = JSON.parse(jsonFile);
  return readed;
}

module.exports = readFileSvc;
