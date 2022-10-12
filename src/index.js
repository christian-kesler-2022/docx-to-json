var add_routes = require('./controllers/utils/add_routes.js');
var docx_to_html = require('./controllers/utils/docx_to_html.js');
var html_to_json = require('./controllers/utils/html_to_json.js');
var pull_files = require('./controllers/utils/pull_files.js');
var push_to_confluence = require('./controllers/utils/push_to_confluence.js');

var express = require('express');
var app = express();

// var routes = require('./controllers/routes.js');
// routes(app);

// console.log('Starting Mammoth');
// var mammoth = require('mammoth');
// mammoth
//   .convertToHtml({ path: __dirname + '/model/input/sample.docx' })
//   .then(function (result) {
//     var html = result.value; // The generated HTML
//     console.log(result.value);
//     console.log(
//       '================================================================'
//     );
//     var messages = result.messages; // Any messages, such as warnings during conversion
//     console.log(result.value);
//   })
//   .done();

const EasyDocx = require('node-easy-docx');
const easyDocx = new EasyDocx({
  path: __dirname + '/model/input/sample.docx',
});
easyDocx
  .parseDocx()
  .then((data) => {
    // JSON data as result
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000);
