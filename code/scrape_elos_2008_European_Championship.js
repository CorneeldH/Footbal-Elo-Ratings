// scrape_elos_2008_European_Championship.js

var webPage = require('webpage');
var page = webPage.create();

var fs = require('fs');
var path = './web_pages_elos/2008_European_Championship.html'

page.open('http://eloratings.net/2008_European_Championship', function (status) {
  var content = page.content;
  fs.write(path,content,'w')
  phantom.exit();
});
