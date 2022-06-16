const axios = require('axios')
const fs = require('fs')

const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
var alphagram = []
var count = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 }
var uptime = process.uptime()
var lastUpdate = 0
var lastCount = 0

function stats() {
	const now = new Date()

	/*var countSinceLast = counter - lastCount
	lastCount = counter

	var timeSinceLast = uptime - lastUpdate
	lastUpdate = uptime

	console.log(`calcs since last update: ${countSinceLast}`)
	console.log(`time since last update: ${timeSinceLast}`)*/

	console.log(now.toUTCString() + ', ' + JSON.stringify(count))
}

function check(input) {
	const unique = Array.from(new Set(input))
	if (unique.length !== input.length) return true
}

stats()

async function main() {
	console.log('Creating alphagrams...')
	await axios.get("https://6363ad05f2d0a19f5eb394e3c10d5cec.m.pipedream.net/?message=Starting!")
	const len = 26

	for (var a = 0; a < len; a++) {
		count.a++
		for (var b = 0; b < len; b++) {
			if (check([a, b])) continue
			count.b++
			for (var c = 0; c < len; c++) {
				if (check([a, b, c])) continue
				count.c++
				for (var d = 0; d < len; d++) {
					if (check([a, b, c, d])) continue
					for (var e = 0; e < len; e++) {
						if (check([a, b, c, d, e])) continue
						count.e++
						for (var f = 0; f < len; f++) {
							if (check([a, b, c, d, e, f])) continue
							count.f++
							for (var g = 0; g < len; g++) {
								if (check([a, b, c, d, e, f, g])) continue
								count.g++
								for (var h = 0; h < len; h++) {
									if (check([a, b, c, d, e, f, g, h])) continue
									count.h++
									for (var i = 0; i < len; i++) {
										if (check([a, b, c, d, e, f, g, h, i])) continue
										count.i++
										for (var j = 0; j < len; j++) {
											if (check([a, b, c, d, e, f, g, h, i, j])) continue
											count.j++
											for (var k = 0; k < len; k++) {
												if (check([a, b, c, d, e, f, g, h, i, j, k])) continue
												count.k++
												for (var l = 0; l < len; l++) {
													if (check([a, b, c, d, e, f, g, h, i, j, k, l])) continue
													count.l++
													for (var m = 0; m < len; m++) {
														if (check([a, b, c, d, e, f, g, h, i, j, k, l, m])) continue
														count.m++
														for (var n = 0; n < len; n++) {
															if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n])) continue
															count.n++
															for (var o = 0; o < len; o++) {
																if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o])) continue
																count.o++
																for (var p = 0; p < len; p++) {
																	if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p])) continue
																	count.p++
																	for (var q = 0; q < len; q++) {
																		if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q])) continue
																		count.q++
																		for (var r = 0; r < len; r++) {
																			if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r])) continue
																			count.r++
																			for (var s = 0; s < len; s++) {
																				if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s])) continue
																				count.s++
																				for (var t = 0; t < len; t++) {
																					if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t])) continue
																					count.t++
																					for (var u = 0; u < len; u++) {
																						if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u])) continue
																						count.u++
																						for (var v = 0; v < len; v++) {
																							if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v])) continue
																							count.v++
																							for (var w = 0; w < len; w++) {
																								if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w])) continue
																								count.w++
																								for (var x = 0; x < len; x++) {
																									if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x])) continue
																									count.x++
																									stats()
																									for (var y = 0; y < len; y++) {
																										if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y])) continue
																										count.y++
																										for (var z = 0; z < len; z++) {
																											let abc = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
																											count.z++
																											if (check(abc)) continue
																											//let abc = [alpha[a], alpha[b], alpha[c]]
																											//alphagram = alphagram.concat([abc])
																											//console.log(abc)
																											alphagram = alphagram.concat(abc)
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	console.log(JSON.stringify(grams))
	console.log('Finished! Saving to file...')
	await axios.get("https://6363ad05f2d0a19f5eb394e3c10d5cec.m.pipedream.net/?message=Finished! Saving to file...")

	var file = fs.createWriteStream('data.txt')
	file.on('error', function (err) { console.log(err) })
	grams.forEach(function (v) { file.write(v.join(', ') + '\n') })
	file.end()

	console.log('Done')
	await axios.get("https://6363ad05f2d0a19f5eb394e3c10d5cec.m.pipedream.net/?message=Done!")
}

main()

/*
const charnum = {
	'tl_nd': 1,
	'tm_nd': 2,
	'tr_nd': 3,
	'sr_nd': 6,
	'br_nd': 9,
	'bm_nd': 8,
	'bl_nd': 7,
	'sl_nd': 4,
	'cc_nd': 5,

	'tl_wd': 10,
	'tm_wd': 11,
	'tr_wd': 12,
	'sr_wd': 15,
	'br_wd': 18,
	'bm_wd': 17,
	'bl_wd': 16,
	'sl_wd': 13,
	'cc_wd': 14,

	't_nd': 19,
	'r_nd': 20,
	'b_nd': 21,
	'l_nd': 22,

	't_wd': 23,
	'r_wd': 24,
	'b_wd': 25,
	'l_wd': 26,
}

const chars = [
	'tl_nd',
	'tm_nd',
	'tr_nd',
	'sr_nd',
	'br_nd',
	'bm_nd',
	'bl_nd',
	'sl_nd',
	'cc_nd',

	'tl_wd',
	'tm_wd',
	'tr_wd',
	'sr_wd',
	'br_wd',
	'bm_wd',
	'bl_wd',
	'sl_wd',
	'cc_wd',

	't_nd',
	'r_nd',
	'b_nd',
	'l_nd',

	't_wd',
	'r_wd',
	'b_wd',
	'l_wd',
]

const words = [
	"sl_nd tm_nd sr_nd tl_wd",
	//"bl_nd sr_nd tm_wd t_nd r_nd tm_wd sr_wd l_nd sr_wd r_nd",
	//"cc_nd sr_nd tr_nd tm_wd bm_wd"
]

function main() {
	words.forEach(w => {
		console.log(w)
		const letters = w.split(' ')
		
		var nums = []
		letters.forEach(l => {
			nums.push(charnum[l])
		})

		nums.forEach(n => {
			console.log(n)
		})
		
		console.log(letters)
		console.log(nums)
	})
}

main()

*/