const PdfPrinter = require('pdfmake');
const fs = require('fs');
const shortid = require('shortid');
const template = require('./template');
const { avery22806 } = require('./template');


const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf',
  },
};

const printer = new PdfPrinter(fonts);

const options = {
  name: 'Wonder Woman', measure: 'President', measure_id: 1, option_id: 1,
};

const election150823 = {
  election_id: 150823,
  measures: [
    {
      measure_id: 123,
      measure_name: 'Representative, District 6',
      candidates: [
        { name: 'Felix Sargent', id: 15231 },
        { name: 'Simeon Jewell', id: 512 },
        { name: 'Steve Caires', id: 1341 },
        { name: 'Donna Summer', id: 112423 },
        { name: 'Chuck Davis', id: 1213 },
        { name: 'Michael Donner', id: 123152 },
        { name: 'Craig Charles', id: 4564 },
        { name: 'Screaming Lord Such', id: 2523 },
      ],
    },
  ],
};


const ballotId = shortid.generate();

function generateBallot(ballot, election) {
  election.measures.forEach((measure) => {
    measure.candidates.forEach((candidate, index) => {
      template.updateTemplate(
        ballot, index, {
          name: candidate.name,
          option_id: candidate.id,
          measure: measure.measure_name,
          measure_id: measure.measure_id,
        },
        ballotId,
      );
    });
  });
  return ballot;
}

console.log(generateBallot(avery22806, election150823));

const pdfDoc = printer.createPdfKitDocument(generateBallot(avery22806, election150823));
pdfDoc.pipe(fs.createWriteStream('document.pdf'));
pdfDoc.end();
