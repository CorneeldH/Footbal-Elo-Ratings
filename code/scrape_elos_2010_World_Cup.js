// scrape_elos_2010_World_Cup.js

var webPage = require('webpage');
var page = webPage.create();

var fs = require('fs');
var path = './web_pages_elos/2010_World_Cup.html'

page.open('http://eloratings.net/2010_World_Cup', function (status) {
  var content = page.content;
  fs.write(path,content,'w')
  phantom.exit();
});
