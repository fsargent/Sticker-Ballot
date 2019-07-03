function generateBallotSheet() {
  const template = {
    content: [
      {
        text: 'StickerVote',
        style: 'header',
      },
      'Place your vote by applying the sticker of the candidate(s) you support on this ballot page. \nTake care not to cover the codes or stickers.\n',
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
      },
      quote: {
        italics: true,
      },
      small: {
        fontSize: 8,
      },
    },
  };

  return template;
}
module.exports = generateBallotSheet;
