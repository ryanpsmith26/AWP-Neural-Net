const brain = require('brain.js');

// const createTrainingData = (num) => {
// 	let data = [];
// 	let elem = 1;
// 	let numInnerDataSets = num / 5;

// 	while (data.length < numInnerDataSets) {
// 		data.push([]);
// 		let innerDataSet = data[data.length - 1];
// 		for (let i = 0; i < 5; i++) {
// 			innerDataSet.push(elem++);
// 		}
// 	}

// 	return data;
// };

// const trainingData = createTrainingData(10);
// console.log(trainingData);

const trainingData = [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

// console.log(net.run([ 1, 2, 3, 4 ]));

module.exports = net;
