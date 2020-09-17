const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const net = require('./net');

// logging middleware
app.use(morgan('dev'));

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// body parsing middleware -- parses req.body!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PUT /api/net
app.put('/api/net', (req, res, next) => {
	try {
		let runData = req.body;
		let result = Math.round(net.run(runData));
		res.json(result);
	} catch (error) {
		next(error);
	}
});

// serve up our React app for any routes that don't match an api route
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handling middleware
app.use(function(err, req, res, next) {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(PORT, () => {
	console.log(`ready to serve neural nets on PORT: ${PORT}`);
});
