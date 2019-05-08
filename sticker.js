const QRCode = require("qrcode");
const shortid = require("shortid");

var crypto = require("crypto");
var fs = require("fs");

var privateKey = fs.readFileSync("private.key").toString("ascii");

function sticker(data) {
  // create UUID for the sticker
  data.stickerId = shortid.generate();
  // Digitally sign text
  var sign = crypto.createSign("RSA-SHA256");
  sign.update(JSON.stringify(data));
  data.sig = sign.sign(privateKey, "hex");

  // QR encode and return
  QRCode.create(JSON.stringify(data))
    .then(qrcode => {
      return qrcode;
    })
    .catch(err => {
      console.error(err);
    });
}

exports.sticker = sticker;
