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


/*console.log("2aaa{{текст}}b{{текст}}текст45'321{{текст}}'".replace(/(?!\{)([а-яА-Я]*)(?=})/g, (text)=>{
	return text.split('').reverse().join('')
}));*/

//console.log("2aaa{{текст}}b{{текст}}bsdf45'321{{текст}}'".match(/\{\{(текст)}}/g))
console.log('aafdngd dfdfnndgs ewrwoo erqppf'.replace(/([a-zA-Z])([a-zA-Z])/g, (p1, p2)=>{
	if(p1.split('')[0] === p1.split('')[1]){
		console.log(p1)
		return ''
	}
}))

console.log('dsf xxx xxx sd'.replace(/(.*) (.*)/g, (p1)=>{
	console.log(p1)
}))

module.exports = {
	resultOutput,
	exerciseFourteen,
	exerciseFortyThree,
	exerciseFiftyFour
};




