const alpha = 'abcdefghijklmnopqrstuvwxyz'
const a = alpha.split('')

var alphagram = []

exports.test = () => {
	console.log('Hi')
}

exports.makeAlphagrams = (lim) => {
	const l = alpha.split('')//.sort()
	next(0, lim)

	return alphagram
}

function next(index, limit) {
	const nextIndex = index + 1
	var abc = []

	for (var p = 0; p < 26; p++) {
		abc.push(a[p])
	}

	alphagram = alphagram.concat([abc])

	if (nextIndex < limit) {
		next(nextIndex, limit)
	}


	/*for (var p = 0; p < 26; p++) {
		console.log(l[p])
	}*/
}