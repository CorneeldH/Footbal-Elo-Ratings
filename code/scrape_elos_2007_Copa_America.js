// scrape_elos_2007_Copa_America.js

var webPage = require('webpage');
var page = webPage.create();

var fs = require('fs');
var path = './web_pages_elos/2007_Copa_America.html'

page.open('http://eloratings.net/2007_Copa_America', function (status) {
  var content = page.content;
  fs.write(path,content,'w')
  phantom.exit();
});
