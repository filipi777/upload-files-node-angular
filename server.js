var express = require('express');
var fs = require('fs');
var app = new express();

app.configure(function(){
  app.use(express.static(__dirname + '/app'));
  app.use(express.bodyParser());
});

app.get('/', function(req, res) {
	res.sendfile('app/index.html');
});

app.put('/api/upload', function(req, res) {
	fs.readFile(req.files.file.path, function (err, data) {
		var nome = new Date();
		var newPath = __dirname + '/files/' + nome.getTime() + '.jpg';

		fs.writeFile(newPath, data, function (err) {
			if (err) throw err;
			res.send({message: 1});
		});
	});
});

app.listen(3000);
console.log('listening');