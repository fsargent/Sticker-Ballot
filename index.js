const PdfPrinter = require('pdfmake');
const fs = require('fs');
const generateStickerSheet = require('./templates/avery94207');
const generateBallotSheet = require('./templates/ballotSheet');

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf',
  },
};

const printer = new PdfPrinter(fonts);

const election150823 = {
  election_id: 150823,
  measures: [
    {
      measure_id: 123,
      measure_name: 'Representative, District 6',
      candidates: [
        { name: 'Wonder Woman', id: 15231 },
        { name: 'Batman', id: 512 },
        { name: 'Superman', id: 1341 },
        { name: 'Rogue', id: 112423 },
        { name: 'Black Panther', id: 1213 },
        { name: 'Godzilla', id: 123152 },
        { name: 'Lex Luther', id: 4564 },
        { name: 'Mr Freeze', id: 2523 },
      ],
    },
  ],
};

const pdfDoc = printer.createPdfKitDocument(generateStickerSheet(election150823));
pdfDoc.pipe(fs.createWriteStream('stickers.pdf'));
pdfDoc.end();

const ballot = printer.createPdfKitDocument(generateBallotSheet());
ballot.pipe(fs.createWriteStream('ballot.pdf'));
ballot.end();
