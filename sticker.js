const QRCode = require('qrcode');
const shortid = require('shortid');
const crypto = require('crypto');
const fs = require('fs');

const privateKey = fs.readFileSync('private.key').toString('ascii');

function sticker(data) {
  // create UUID for the sticker
  data.stickerId = shortid.generate();
  // Digitally sign text
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(JSON.stringify(data));
  data.sig = sign.sign(privateKey, 'hex');

  // QR encode and return
  QRCode.create(JSON.stringify(data))
    .then(qrcode => qrcode)
    .catch((err) => {
      console.error(err);
    });
}

exports.sticker = sticker;
