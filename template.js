
const crypto = require('crypto');
const fs = require('fs');

const avery22806 = {
  content: [
    {
      style: 'avery22806',
      table: {
        layout: {
          hLineWidth(i, node) {
            return i === 0 || i === node.table.body.length ? 2 : 1;
          },
          vLineWidth(i, node) {
            return i === 0 || i === node.table.widths.length ? 2 : 1;
          },
          hLineColor(i, node) {
            return i === 0 || i === node.table.body.length ? 'black' : 'gray';
          },
          vLineColor(i, node) {
            return i === 0 || i === node.table.widths.length ? 'black' : 'gray';
          },
          // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
          // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
          // paddingLeft: function(i, node) { return 4; },
          // paddingRight: function(i, node) { return 4; },
          // paddingTop: function(i, node) { return 2; },
          // paddingBottom: function(i, node) { return 2; },
          // fillColor: function (rowIndex, node, columnIndex) { return null; }
        },
        widths: [140, 36, 140, 36, 140],
        heights: [140, 36, 140, 36, 140, 36, 140],
        body: [
          [
            {
              stack: [

              ],
            },
            '',
            {
              stack: [

              ],
            },
            '',
            {
              stack: [

              ],
            },
          ],
          ['', '', '', '', ''],
          [
            {
              stack: [

              ],
            },
            '',
            {
              stack: [

              ],
            },
            '',
            {
              stack: [

              ],
            },
          ],
          ['', '', '', '', ''],
          [
            {
              stack: [

              ],
            },
            '',
            {
              stack: [

              ],
            },
            '',
            {
              stack: [

              ],
            },
          ],
          ['', '', '', '', ''],
          [
            {
              stack: [

              ],
            },
            '',
            {
              stack: [

              ],
            },
            '',
            {
              stack: [

              ],
            },
          ],
          ['', '', '', '', '']],
      },
    },
  ],
  pageMargins: [45, 45, 41, 22.3],
  pageSize: 'LETTER',
  defaultStyle: {
    // alignment: 'justify'
  },
};

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

module.exports = { updateTemplate, avery22806, getLocation };
