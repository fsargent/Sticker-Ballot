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

