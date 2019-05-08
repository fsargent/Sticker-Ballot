var fs = require("fs");
var sticker = require("sticker");
var publicKey = fs.readFileSync("public.key").toString("ascii");

function qrencode(publicKey) {
  QRCode.create(publicKey, function(err) {
    if (err) throw err;
  });
}

pdfMake.tableLayouts = {
  exampleLayout: {
    hLineWidth: function(i, node) {
      if (i === 0 || i === node.table.body.length) {
        return 0;
      }
      return i === node.table.headerRows ? 2 : 1;
    },
    vLineWidth: function(i) {
      return 0;
    },
    hLineColor: function(i) {
      return i === 1 ? "black" : "#aaa";
    },
    paddingLeft: function(i) {
      return i === 0 ? 0 : 8;
    },
    paddingRight: function(i, node) {
      return i === node.table.widths.length - 1 ? 0 : 8;
    }
  }
};
