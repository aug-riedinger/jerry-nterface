var express = require('express');
var app = express();

var http = require('http'),
httpProxy = require('http-proxy');

// app.use(express.logger());
app.use(express.errorHandler({
  dumpExceptions: true
}));
app.use(express.bodyParser());
app.use(express['static'](__dirname + '/app/static'));

var allowCrossDomain = function(req, res, next) {
  console.log('allowingCrossDomain');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization, X-Mindflash-SessionID');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
};

var proxy = new httpProxy.RoutingProxy();

app.get('/etherpad', function(req, res) {
  req.url = req.url.replace(/^\/etherpad/, '');
  return proxy.proxyRequest(req, res, {
    host: 'localhost',
    port: 9001
  });
});

app.get('/', function(request, response) {
  response.sendfile(__dirname + "/app/index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});