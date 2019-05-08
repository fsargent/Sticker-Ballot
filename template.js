// playground requires you to assign document definition to a variable called dd

var dd = {
  content: [
    {
      style: "avery22806",
      table: {
        widths: [144, 45, 144, 45, 144],
        body: [
          ["width=100", "star-sized", "width=200", "star-sized"],
          [
            "fixed-width cells have exactly the specified width",
            { text: "nothing interesting here", italics: true, color: "gray" },
            { text: "nothing interesting here", italics: true, color: "gray" },
            { text: "nothing interesting here", italics: true, color: "gray" }
          ]
        ]
      }
    }
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      margin: [0, 0, 0, 10]
    },
    subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 5]
    },
    tableExample: {
      margin: [0, 5, 0, 15]
    },
    tableHeader: {
      bold: true,
      fontSize: 13,
      color: "black"
    }
  },
  defaultStyle: {
    // alignment: 'justify'
  }
};
