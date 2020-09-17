const brain = require('brain.js');

const createTrainingDataAscending = (num) => {
	let data = [ [ 1, 2, 3, 4 ] ];
	let numInnerDataSets = num - 3;

	while (data.length < numInnerDataSets) {
		let previousSet = data[data.length - 1];
		data.push([]);
		let nextStartingElem = previousSet[1];
		let nextDataSet = data[data.length - 1];
		for (let i = 0; i < 4; i++) {
			nextDataSet.push(nextStartingElem++);
		}
	}

	return data;
};

// const createTrainingDataDescending = (num) => {
// 	let data = [ [ 20, 19, 18, 17 ] ];
// 	let numInnerDataSets = num - 3;

// 	while (data.length < numInnerDataSets) {
// 		let previousSet = data[data.length - 1];
// 		data.push([]);
// 		let nextStartingElem = previousSet[1];
// 		let nextDataSet = data[data.length - 1];
// 		for (let i = 0; i < 4; i++) {
// 			nextDataSet.push(nextStartingElem--);
// 		}
// 	}

// 	return data;
// };

const trainingData = createTrainingDataAscending(20);
// [
//     [1, 2, 3, 4], [2, 3, 4, 5],
//     [3, 4, 5, 6], [4, 5, 6, 7],
//     [5, 6, 7, 8], [6, 7, 8, 9],
//     [7, 8, 9, 10], [8, 9, 10, 11],
//     [9, 10, 11, 12], [10, 11, 12, 13],
//     [11, 12, 13, 14], [12, 13, 14, 15],
//     [13, 14, 15, 16], [14, 15, 16, 17],
//     [15, 16, 17, 18], [16, 17, 18, 19],
//     [17, 18, 19, 20]
// ]

const net = new brain.recurrent.LSTMTimeStep({
	hiddenLayers: [ 4 ]
});

net.train(trainingData);

module.exports = net;
