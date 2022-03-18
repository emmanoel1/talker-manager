const fs = require('fs/promises');

async function talkerSvc() {
  const jsonFile = await fs.readFile('../talker.json', 'utf8');
  const talkerList = JSON.parse(jsonFile);
  return talkerList;
}

module.exports = talkerSvc;
