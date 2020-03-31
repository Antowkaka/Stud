function resultOutput(str, regex){
	return str.match(regex);
}


// На жадность //
// ex.14

function exerciseFourteen() {
	let str = 'aba accca azzza wwwwa';
	function replacer(match, p1, p2, p3) {
		p1 = p3 = '!';
		return [p1, p2, p3].join('');
	}

	let regex = /(a)([^\s]+)(a)/g;

	return str.replace(regex, replacer);
}

function exerciseFortyThree() {
	let str = 'aaa@bbb eee7@kkk';
	function replacer(match, p1, p2, p3) {
		return [p3, p2, p1].join('');
	}

	let regex = /([a-z1-9]*)(@)([a-z1-9]*)/g;

	return str.replace(regex, replacer);
}

function exerciseFiftyFour(str){
	let sum = 0;
	for(let el of str.match(/\d+/g)){
		sum += parseInt(el);
	}
	return sum;
}

module.exports = {
	resultOutput,
	exerciseFourteen,
	exerciseFortyThree,
	exerciseFiftyFour
};




