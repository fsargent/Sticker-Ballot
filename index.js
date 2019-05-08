const PdfPrinter = require('pdfmake');
const fs = require('fs');
// const sticker = require('./sticker');

// const publicKey = fs.readFileSync('public.key').toString('ascii');

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
        widths: [135, 36, 135, 36, 135],
        heights: [135, 36, 135, 36, 135, 36, 135],
        body: [
          [
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
            '',
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
            '',
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
          ],
          ['', '', '', '', ''],
          [
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
            '',
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
            '',
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
          ],
          ['', '', '', '', ''],
          [
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
            '',
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
            '',
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
          ],
          ['', '', '', '', ''],
          [
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
            '',
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
            '',
            {
              stack: [
                { qr: 'text in QR', alignment: 'center' },
                { text: 'Felix Sargent', alignment: 'center' },
              ],
            },
          ],
          ['', '', '', '', ''],
        ],
      },
    },
  ],
  pageMargins: [45, 45, 41, 22.3],
  pageSize: 'LETTER',
  defaultStyle: {
    // alignment: 'justify'
  },
};

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf',
  },
};

const printer = new PdfPrinter(fonts);

const pdfDoc = printer.createPdfKitDocument(avery22806);
pdfDoc.pipe(fs.createWriteStream('document.pdf'));
pdfDoc.end();
