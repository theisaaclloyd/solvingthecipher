const anagrams = require("./alphagrams.js")
const fs = require('fs').promises

console.log('Creating alphagrams...')
const grams = anagrams.makeAlphagrams()
console.log('Finished! Saving to file...')
try {
	await fs.writeFile('data.txt', grams)
} catch (error) {
	console.log(error)
}
console.log('Done')

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