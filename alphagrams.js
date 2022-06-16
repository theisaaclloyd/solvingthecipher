const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
var alphagram = []

exports.test = () => {
	console.log('Hi')
}

function check(input) {
	const unique = Array.from(new Set(input))
	if (unique.length !== input.length) return true
}

exports.makeAlphagrams = () => {
	var counter = 0
	const len = 26
	for (var a = 0; a < len; a++) {
		//console.log('a: ' + a)
		for (var b = 0; b < len; b++) {
			//if (check([a, b])) continue
			//console.log('b: ' + b)
			for (var c = 0; c < len; c++) {
				//if (check([a, b, c])) continue
				//console.log('c: ' + c)
				for (var d = 0; d < len; d++) {
					//if (check([a, b, c, d])) continue
					//console.log('d: ' + d)
					for (var e = 0; e < len; e++) {
						//if (check([a, b, c, d, e])) continue
						//console.log('e: ' + e)
						for (var f = 0; f < len; f++) {
							//if (check([a, b, c, d, e, f])) continue
							//console.log('f: ' + f)
							for (var g = 0; g < len; g++) {
								//if (check([a, b, c, d, e, f, g])) continue
								//console.log('g: ' + g)
								for (var h = 0; h < len; h++) {
									//if (check([a, b, c, d, e, f, g, h])) continue
									//console.log('h: ' + h)
									for (var i = 0; i < len; i++) {
										//if (check([a, b, c, d, e, f, g, h, i])) continue
										//console.log('i: ' + i)
										for (var j = 0; j < len; j++) {
											//if (check([a, b, c, d, e, f, g, h, i, j])) continue
											//console.log('j: ' + j)
											for (var k = 0; k < len; k++) {
												//if (check([a, b, c, d, e, f, g, h, i, j, k])) continue
												//console.log('k: ' + k)
												for (var l = 0; l < len; l++) {
													//if (check([a, b, c, d, e, f, g, h, i, j, k, l])) continue
													//console.log('l: ' + l)
													for (var m = 0; m < len; m++) {
														//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m])) continue
														//console.log('m: ' + m)
														for (var n = 0; n < len; n++) {
															//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n])) continue
															//console.log('n: ' + n)
															for (var o = 0; o < len; o++) {
																//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o])) continue
																//console.log('o: ' + o)
																for (var p = 0; p < len; p++) {
																	//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p])) continue
																	//console.log('p: ' + p)
																	for (var q = 0; q < len; q++) {
																		//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q])) continue
																		//console.log('q: ' + q)
																		for (var r = 0; r < len; r++) {
																			//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r])) continue
																			//console.log('r: ' + r)
																			for (var s = 0; s < len; s++) {
																				//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s])) continue
																				//console.log('s: ' + s)
																				for (var t = 0; t < len; t++) {
																					//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t])) continue
																					//console.log('t: ' + t)
																					for (var u = 0; u < len; u++) {
																						//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u])) continue
																						//console.log('u: ' + u)
																						for (var v = 0; v < len; v++) {
																							//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v])) continue
																							//console.log('v: ' + v)
																							for (var w = 0; w < len; w++) {
																								//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w])) continue
																								//console.log('w: ' + w)
																								for (var x = 0; x < len; x++) {
																									//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x])) continue
																									//console.log('x: ' + x)
																									for (var y = 0; y < len; y++) {
																										//if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y])) continue
																										//console.log('y: ' + y)
																										for (var z = 0; z < len; z++) {
																											let abc = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
																											//if (check(abc)) continue
																											//console.log('z: ' + z)
																											//let abc = [alpha[a], alpha[b], alpha[c]]
																											//alphagram = alphagram.concat([abc])
																											//console.log(abc)
																											counter++
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

	console.log('Finished')

	return alphagram
}