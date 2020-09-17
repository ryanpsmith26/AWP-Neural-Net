const brain = require('brain.js');
const data = require('../dataStackCat.json');

const net = new brain.recurrent.LSTM();

const trainingData = data.map((item) => ({
	input: item.text,
	output: item.stack
}));

// net.train() returns stats: error and iterations so we can print those to the console to see how training went
console.log(
	'stack category stats-->',
	net.train(trainingData, {
		iterations: 20
	})
);

module.exports = net;
