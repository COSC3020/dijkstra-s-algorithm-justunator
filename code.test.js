const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

let graph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ], //a
			[ 4, 0, 8, 0, 0, 0, 0, 11, 0 ], //b
			[ 0, 8, 0, 7, 0, 4, 0, 0, 2 ], //c
			[ 0, 0, 7, 0, 9, 14, 0, 0, 0], //d
			[ 0, 0, 0, 9, 0, 10, 0, 0, 0 ], //e
			[ 0, 0, 4, 14, 10, 0, 2, 0, 0], //f
			[ 0, 0, 0, 0, 0, 2, 0, 1, 6 ], //g
			[ 8, 11, 0, 0, 0, 0, 1, 0, 7 ], //h
			[ 0, 0, 2, 0, 0, 0, 6, 7, 0 ]]; //i

assert(JSON.stringify(dijkstra(graph, 0)) === JSON.stringify([[0, 0], [1, 4], [2, 12], [3, 19], [4, 21], [5, 11], [6, 9], [7, 8], [8, 14]]));
assert(JSON.stringify(dijkstra(graph, 1)) === JSON.stringify([[0, 4], [1, 0], [2, 8], [3, 15], [4, 22], [5, 12], [6, 12], [7, 11], [8, 10]]));
assert(JSON.stringify(dijkstra(graph, 2)) === JSON.stringify([[0, 12], [1, 8], [2, 0], [3, 7], [4, 14], [5, 4], [6, 6], [7, 7], [8, 2]]));
assert(JSON.stringify(dijkstra(graph, 3)) === JSON.stringify([[0, 19], [1, 15], [2, 7], [3, 0], [4, 9], [5, 11], [6, 13], [7, 14], [8, 9]]));
assert(JSON.stringify(dijkstra(graph, 4)) === JSON.stringify([[0, 21], [1, 22], [2, 14], [3, 9], [4, 0], [5, 10], [6, 12], [7, 13], [8, 16]]));
assert(JSON.stringify(dijkstra(graph, 5)) === JSON.stringify([[0, 11], [1, 12], [2, 4], [3, 11], [4, 10], [5, 0], [6, 2], [7, 3], [8, 6]]));
assert(JSON.stringify(dijkstra(graph, 6)) === JSON.stringify([[0, 9], [1, 12], [2, 6], [3, 13], [4, 12], [5, 2], [6, 0], [7, 1], [8, 6]]));
assert(JSON.stringify(dijkstra(graph, 7)) === JSON.stringify([[0, 8], [1, 11], [2, 7], [3, 14], [4, 13], [5, 3], [6, 1], [7, 0], [8, 7]]));
assert(JSON.stringify(dijkstra(graph, 8)) === JSON.stringify([[0, 14], [1, 10], [2, 2], [3, 9], [4, 16], [5, 6], [6, 6], [7, 7], [8, 0]]));