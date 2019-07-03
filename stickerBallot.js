
const crypto = require('crypto');
const fs = require('fs');

const privateKey = fs.readFileSync('private.key').toString('ascii');


function generateSignature(data) {
  // Digitally sign text
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(data);
  const signature = sign.sign(privateKey, 'base64');
  return signature;
}

function updateTemplate(template, location, option, ballotId) {
  const newTemplate = template;
  const row = Math.floor(location / 3) * 2;
  const column = (location % 3) * 2;

  const qrData = `${option.name},${option.measure},mid:${option.measure_id},oid:${option.option_id},bid:${ballotId}`;
  const qr = `${qrData}|sig:${generateSignature(qrData)}`;
  const text = `${option.name}, ${option.measure}`;

  newTemplate.content[0].table.body[row][column] = {
    stack: [
      { qr, alignment: 'center', fit: 140 },
      { text, alignment: 'center' },
    ],
  };

  return newTemplate;
}

function getLocation(template, location) {
  const newTemplate = template;
  const row = Math.floor(location / 3) * 2;
  const column = (location % 3) * 2;

  return newTemplate.content[0].table.body[row][column];
}

module.exports = { updateTemplate, getLocation };
