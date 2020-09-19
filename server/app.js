const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
// const netNumSeq = require('./netNumberSequence');
// const netStackCat = require('./netStackCategory');

// logging middleware
app.use(morgan('dev'));

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// body parsing middleware -- parses req.body!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PUT /api/net/nums
app.put('/api/net/nums', (req, res, next) => {
	try {
		// for testing only:
		res.json('hello');
		// let runData = req.body;
		// let result = netNumSeq.run(runData);
		// // print result before rounding for illustration purposes
		// console.log('NUM SEQ RESULT--->', result);
		// result = Math.round(result);
		// res.json(result);
	} catch (error) {
		next(error);
	}
});

// PUT /api/net/stack
app.put('/api/net/stack', (req, res, next) => {
	try {
		let runData = req.body;
		let result = netStackCat.run(runData.input);
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

// conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.
if (!module.parent)
	app.listen(PORT, () => {
		console.log(`ready to serve neural nets on PORT: ${PORT}`);
	});

module.exports = app;
