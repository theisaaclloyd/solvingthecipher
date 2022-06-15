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
	for (var a = 0; a < 26; a++) {
		for (var b = 0; b < 26; b++) {
			if (check([a, b])) continue
			for (var c = 0; c < 26; c++) {
				if (check([a, b, c])) continue
				for (var d = 0; d < 26; d++) {
					if (check([a, b, c, d])) continue
					for (var e = 0; e < 26; e++) {
						if (check([a, b, c, d, e])) continue
						for (var f = 0; f < 26; f++) {
							if (check([a, b, c, d, e, f])) continue
							for (var g = 0; g < 26; g++) {
								if (check([a, b, c, d, e, f, g])) continue
								for (var h = 0; h < 26; h++) {
									if (check([a, b, c, d, e, f, g, h])) continue
									for (var i = 0; i < 26; i++) {
										if (check([a, b, c, d, e, f, g, h, i])) continue
										for (var j = 0; j < 26; j++) {
											if (check([a, b, c, d, e, f, g, h, i, j])) continue
											for (var k = 0; k < 26; k++) {
												if (check([a, b, c, d, e, f, g, h, i, j, k])) continue
												for (var l = 0; l < 26; l++) {
													if (check([a, b, c, d, e, f, g, h, i, j, k, l])) continue
													for (var m = 0; m < 26; m++) {
														if (check([a, b, c, d, e, f, g, h, i, j, k, l, m])) continue
														for (var n = 0; n < 26; n++) {
															if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n])) continue
															for (var o = 0; o < 26; o++) {
																if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o])) continue
																for (var p = 0; p < 26; p++) {
																	if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p])) continue
																	for (var q = 0; q < 26; q++) {
																		if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q])) continue
																		for (var r = 0; r < 26; r++) {
																			if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r])) continue
																			for (var s = 0; s < 26; s++) {
																				if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s])) continue
																				for (var t = 0; t < 26; t++) {
																					if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t])) continue
																					for (var u = 0; u < 26; u++) {
																						if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u])) continue
																						for (var v = 0; v < 26; v++) {
																							if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v])) continue
																							for (var w = 0; w < 26; w++) {
																								if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w])) continue
																								for (var x = 0; x < 26; x++) {
																									if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x])) continue
																									for (var y = 0; y < 26; y++) {
																										if (check([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y])) continue
																										for (var z = 0; z < 26; z++) {
																											let abc = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
																											if (check(abc)) continue
																											//let abc = [alpha[a], alpha[b], alpha[c]]
																											//alphagram = alphagram.concat([abc])
																											//console.log(abc)
																											alphagram = alphagram.concat([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z])
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

	return alphagram
}