const crypto = require('crypto');
const fs = require('fs');
const shortid = require('shortid');

const privateKey = fs.readFileSync('private.key').toString('ascii');

const avery94207 = {
  content: [
    {
      style: 'avery94207',
      layout: 'noBorders',
      table: {
        widths: [288, 13.5, 288],
        heights: [144, 144, 144, 144, 144],
        body: [
          [
            {
              stack: [],
            },
            '',
            {
              stack: [],
            },
          ],
          [
            {
              stack: [],
            },
            '',
            {
              stack: [],
            },
          ],
          [
            {
              stack: [],
            },
            '',
            {
              stack: [],
            },
          ],
          [
            {
              stack: [],
            },
            '',
            {
              stack: [],
            },
          ],
          [
            {
              stack: [],
            },
            '',
            {
              stack: [],
            },
          ],
        ],
      },
    },
  ],
  pageMargins: [17.45, 36, 22.3, 30],
  pageSize: 'LETTER',
  defaultStyle: {
    // alignment: 'justify'
  },
};

function generateSignature(data) {
  // Digitally sign text
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(data);
  const signature = sign.sign(privateKey, 'base64');
  return signature;
}

function updateTemplate(template, location, option, ballotId) {
  const newTemplate = template;
  const row = Math.floor(location / 2);
  const column = (location % 2) * 2;

  const qrData = `${option.name},${option.measure},bid:${ballotId}`;
  const qr = `${qrData}|sig:${generateSignature(qrData)}`;
  const text = `${option.name}\n${option.measure}`;

  newTemplate.content[0].table.body[row][column] = {
    columns: [{ qr, alignment: 'center', fit: 140 }, { text, alignment: 'center' }],
  };

  return newTemplate;
}

function getLocation(template, location) {
  const newTemplate = template;
  const row = Math.floor(location / 2) * 2;
  const column = (location % 1) * 2;

  return newTemplate.content[0].table.body[row][column];
}

function generateStickerSheet(election) {
  const ballotId = shortid.generate();
  election.measures.forEach((measure) => {
    measure.candidates.forEach((candidate, index) => {
      updateTemplate(
        avery94207,
        index,
        {
          name: candidate.name,
          measure: measure.measure_name,
        },
        ballotId,
      );
    });
  });
  return avery94207;
}

module.exports = generateStickerSheet;
