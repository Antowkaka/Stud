const { describe } = require('mocha');
const { it } = require('mocha');
const { assert } = require('chai');

const { resultOutput } = require('../regex')
const { exerciseFourteen } = require('../regex')
const { exerciseFortyThree } = require('../regex')
const { exerciseFiftyFour } = require('../regex')

describe('Exercise 1', function() {
	it('expect [\'ahb\', \'acb\', \'aeb\']', function () {
		assert.deepEqual(resultOutput('ahb acb aeb aeeb adcb axeb', /a.b/g), [ 'ahb', 'acb', 'aeb' ]);
	});
})

describe('Exercise 2', function() {
	it('expect [\'abba\', \'adca\', \'abea\']', function () {
		assert.deepEqual(resultOutput('aba aca aea abba adca abea', /a.{2}a/g), [ 'abba', 'adca', 'abea' ]);
	});
})

describe('Exercise 3', function() {
	it('expect [ \'abba\', \'abea\' ]', function () {
		assert.deepEqual(resultOutput('aba aca aea abba adca abea', /a.[^c]a/g), [ 'abba', 'abea' ]);
	});
})

describe('Exercise 4', function() {
	it('expect [ \'aba\', \'abba\', \'abbba\' ]', function () {
		assert.deepEqual(resultOutput('aa aba abba abbba abca abea', /ab+a/g), [ 'aba', 'abba', 'abbba' ]);
	});
})

describe('Exercise 5', function() {
	it('expect [ \'aa\', \'aba\', \'abba\', \'abbba\' ]', function () {
		assert.deepEqual(resultOutput('aa aba abba abbba abca abea', /ab*a/g), [ 'aa', 'aba', 'abba', 'abbba' ]);
	});
})

describe('Exercise 6', function() {
	it('expect [ \'aa\', \'aba\' ]', function () {
		assert.deepEqual(resultOutput('aa aba abba abbba abca abea', /ab?a/g), [ 'aa', 'aba' ]);
	});
})

describe('Exercise 7', function() {
	it('expect [ \'aba\', \'abba\', \'abbba\' ]', function () {
		assert.deepEqual(resultOutput('aa aba abba abbba abca abea', /(ab+a)/g), [ 'aba', 'abba', 'abbba' ]);
	});
})

describe('Exercise 8', function() {
	it('expect [\'ab\', \'ab\', \'ab\',\'ab\', \'ab\', \'ab\',\'ab\', \'ab\', \'ab\',\'ab\']', function () {
		assert.deepEqual(resultOutput('ab abab abab abababab abea', /(ab+)/g), ['ab', 'ab', 'ab', 'ab', 'ab', 'ab', 'ab', 'ab', 'ab', 'ab']);
	});
})

describe('Exercise 9', function() {
	it('expect [ \'a.a\' ]', function () {
		assert.deepEqual(resultOutput('a.a aba aea', /a\.a/g), [ 'a.a' ]);
	});
})

describe('Exercise 10', function() {
	it('expect [ \'2+3\' ]', function () {
		assert.deepEqual(resultOutput('2+3 223 2223', /2\+3/g), [ '2+3' ]);
	});
})

describe('Exercise 11', function() {
	it('expect [ \'2+3\', \'2++3\', \'2+++3\' ]', function () {
		assert.deepEqual(resultOutput('23 2+3 2++3 2+++3 345 567', /2\++3/g), [ '2+3', '2++3', '2+++3' ]);
	});
})

describe('Exercise 12', function() {
	it('expect [ \'23\', \'2+3\', \'2++3\', \'2+++3\' ]', function () {
		assert.deepEqual(resultOutput('23 2+3 2++3 2+++3 445 677', /2\+*3/g), [ '23', '2+3', '2++3', '2+++3' ]);
	});
})

describe('Exercise 13', function() {
	it('expect [ \'*q+\', \'*qq+\', \'*qqq+\' ]', function () {
		assert.deepEqual(resultOutput('*+ *q+ *qq+ *qqq+ *qqq qqq+', /\*q+\+/g), [ '*q+', '*qq+', '*qqq+' ]);
	});
})

describe('Exercise 14', function() {
	it('expect "!b! !ccc! !zzz! wwwwa"', function () {
		assert.deepEqual(exerciseFourteen(), '!b! !ccc! !zzz! wwwwa');
	});
})

describe('Exercise 15', function() {
	it('expect [ \'aba\', \'abba\', \'abbba\', \'abbbba\' ]', function () {
		assert.deepEqual(resultOutput('aa aba abba abbba abbbba abbbbba', /ab{1,4}a/g), [ 'aba', 'abba', 'abbba', 'abbbba' ]);
	});
})

describe('Exercise 16', function() {
	it('expect [ \'aba\', \'abba\', \'abbba\' ]', function () {
		assert.deepEqual(resultOutput('aa aba abba abbba abbbba abbbbba', /ab{1,3}a/g), [ 'aba', 'abba', 'abbba' ]);
	});
})

describe('Exercise 17', function() {
	it('expect [ \'abbbba\', \'abbbbba\' ]', function () {
		assert.deepEqual(resultOutput('aa aba abba abbba abbbba abbbbba', /ab{4,}a/g), [ 'abbbba', 'abbbbba' ]);
	});
})

describe('Exercise 18', function() {
	it('expect [ \'a1a\', \'a2a\', \'a3a\', \'a4a\', \'a5a\' ]', function () {
		assert.deepEqual(resultOutput('a1a a2a a3a a4a a5a aba aca', /a\da/g), [ 'a1a', 'a2a', 'a3a', 'a4a', 'a5a' ]);
	});
})

describe('Exercise 19', function() {
	it('expect [ \'a1a\', \'a22a\', \'a333a\', \'a4444a\', \'a55555a\' ]', function () {
		assert.deepEqual(resultOutput('a1a a22a a333a a4444a a55555a aba aca', /a\d+a/g), [ 'a1a', 'a22a', 'a333a', 'a4444a', 'a55555a' ]);
	});
})

describe('Exercise 20', function() {
	it('expect [ \'aa\', \'a1a\', \'a22a\', \'a333a\', \'a4444a\', \'a55555a\' ]', function () {
		assert.deepEqual(resultOutput('aa a1a a22a a333a a4444a a55555a aba aca', /a\d*a/g), [ 'aa', 'a1a', 'a22a', 'a333a', 'a4444a', 'a55555a' ]);
	});
})

describe('Exercise 21', function() {
	it('expect [ \'avb\', \'abb\', \'acb\' ]', function () {
		assert.deepEqual(resultOutput('avb a1b a2b a3b a4b a5b abb acb', /a\Db/g), [ 'avb', 'abb', 'acb' ]);
	});
})

describe('Exercise 22', function() {
	it('expect [ \'a#b\', \'a$b\', \'a-b\' ]', function () {
		assert.deepEqual(resultOutput('ave a#b a2b a$b a4b a5b a-b acb', /a\Wb/g), [ 'a#b', 'a$b', 'a-b' ]);
	});
})

describe('Exercise 23', function() {
	it('expect \'ave!a#a!a2a!a$a!a4a!a5a!a-a!aca\'', function () {
		assert.deepEqual('ave a#a a2a a$a a4a a5a a-a aca'.replace(/ /g, '!'), 'ave!a#a!a2a!a$a!a4a!a5a!a-a!aca');
	});
})

describe('Exercise 24', function() {
	it('expect [ \'aba\', \'aea\', \'axa\' ]', function () {
		assert.deepEqual(resultOutput('aba aea aca aza axa', /a[^cz ]a/g), [ 'aba', 'aea', 'axa' ]);
	});
})

describe('Exercise 25', function() {
	it('expect [ \'a.a\', \'a+a\', \'a*a\' ]', function () {
		assert.deepEqual(resultOutput('aba aea aca aza axa a.a a+a a*a', /a[^a-z ]a/g), [ 'a.a', 'a+a', 'a*a' ]);
	});
})

describe('Exercise 26', function() {
	it('expect [ \'a5a\', \'a3a\', \'a6a\', \'a7a\' ]', function () {
		assert.deepEqual(resultOutput('a2a a5a aca a3a a6a a.a a7a a*a', /a[3-7]a/g), [ 'a5a', 'a3a', 'a6a', 'a7a' ]);
	});
})

describe('Exercise 27', function() {
	it('expect [ \'afa\', \'ada\', \'aga\', \'aea\', \'aba\' ]', function () {
		assert.deepEqual(resultOutput('afa ada asa aga aea a.a aqa aba', /a[a-g]a/g), [ 'afa', 'ada', 'aga', 'aea', 'aba' ]);
	});
})

describe('Exercise 28', function() {
	it('expect [ \'afa\', \'ara\', \'axa\', \'aqa\', \'aya\', \'aua\' ]', function () {
		assert.deepEqual(resultOutput('afa aDa ara axa aqa aya aua aga', /a[a-fj-z]a/g), [ 'afa', 'ara', 'axa', 'aqa', 'aya', 'aua' ]);
	});
})

describe('Exercise 29', function() {
	it('expect [ \'afa\', \'aDa\' ]', function () {
		assert.deepEqual(resultOutput('afa aDa ara axa aqa aya aua aga', /a[a-fA-Z]a/g), [ 'afa', 'aDa' ]);
	});
})

describe('Exercise 30', function() {
	it('expect [ \'aba\', \'aca\', \'aza\', \'a-a\', \'a#a\' ]', function () {
		assert.deepEqual(resultOutput('aba aea aca aza axa a-a a#a', /a[^ex ]a/g), [ 'aba', 'aca', 'aza', 'a-a', 'a#a' ]);
	});
})

describe('Exercise 31', function() {
	it('expect [ \'wйw\', \'wяw\', \'wёw\' ]', function () {
		assert.deepEqual(resultOutput('wйw wяw wёw wqw', /w[а-ё]w/g), [ 'wйw', 'wяw', 'wёw' ]);
	});
})

describe('Exercise 32', function() {
	it('expect [ \'aeffa\', \'aza\' ]', function () {
		assert.deepEqual(resultOutput('aAXa aeffa aGha aza ax23a a3sSa', /a[a-z]*a/g), [ 'aeffa', 'aza' ]);
	});
})

describe('Exercise 33', function() {
	it('expect [ \'aAXa\', \'aeffa\', \'aGha\', \'aza\' ]', function () {
		assert.deepEqual(resultOutput('aAXa aeffa aGha aza ax23a a3sSa', /a[a-zA-Z]*a/g), [ 'aAXa', 'aeffa', 'aGha', 'aza' ]);
	});
})

describe('Exercise 34', function() {
	it('expect [ \'aeffa\', \'aza\', \'ax23a\' ]', function () {
		assert.deepEqual(resultOutput('aAXa aeffa aGha aza ax23a a3sSa', /a[a-z1-9]*a/g), [ 'aeffa', 'aza', 'ax23a' ]);
	});
})

describe('Exercise 35', function() {
	it('expect [\'ааа\', \'ббб\', \'ё\', \'ё\',   \'ё\',   \'ззз\', \'ййй\', \'ААА\', \'БББ\', \'Ё\',   \'Ё\',   \'Ё\', \'ЗЗЗ\', \'ЙЙЙ\']', function () {
		assert.deepEqual(resultOutput('ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ', /[А-Яа-я]*[^ ]/g), ['ааа', 'ббб', 'ё', 'ё',   'ё',   'ззз', 'ййй', 'ААА', 'БББ', 'Ё',   'Ё',   'Ё', 'ЗЗЗ', 'ЙЙЙ']);
	});
})

describe('Exercise 36', function() {
	it('expect !!! aaa aaa', function () {
		assert.deepEqual('aaa aaa aaa'.replace(/^(aaa)/g, '!!!'), '!!! aaa aaa');
	});
})

describe('Exercise 37', function() {
	it('expect aaa aaa !!!', function () {
		assert.deepEqual('aaa aaa aaa'.replace(/(aaa)$/g, '!!!'), 'aaa aaa !!!');
	});
})

describe('Exercise 38', function() {
	it('expect [ \'aeeea\', \'aeea\', \'aea\', \'axa\', \'axxa\', \'axxxa\' ]', function () {
		assert.deepEqual(resultOutput('aeeea aeea aea axa axxa axxxa', /a(e|x)+a/g), [ 'aeeea', 'aeea', 'aea', 'axa', 'axxa', 'axxxa' ]);
	});
})

describe('Exercise 39', function() {
	it('expect [ \'aeea\', \'aea\', \'axa\', \'axxa\', \'axxxa\' ]', function () {
		assert.deepEqual(resultOutput('aeeea aeea aea axa axxa axxxa', /a(e{1,2}|x+)a/g), [ 'aeea', 'aea', 'axa', 'axxa', 'axxxa' ]);
	});
})

describe('Exercise 40', function() {
	it('expect ! abc', function () {
		assert.deepEqual('a\a abc'.replace(/a\a/, '!'), '! abc');
	});
})

describe('Exercise 41', function() {
	it('expect a\\a a\\\\a !', function () {
		assert.deepEqual('a\\a a\\\\a a\\\\\\a'.replace(/a\\\\\\a/, '!'), 'a\\a a\\\\a !');
	});
})

describe('Exercise 42', function() {
	it('expect bbb ! bbb !', function () {
		assert.deepEqual('bbb /aaa\\ bbb /ccc\\'.replace(/\/...\\/g, '!'), 'bbb ! bbb !');
	});
})

describe('Exercise 43', function() {
	it('expect bbb@aaa kkk@eee7', function () {
		assert.deepEqual(exerciseFortyThree(), 'bbb@aaa kkk@eee7');
	});
})

describe('Exercise 44', function() {
	it('expect a11b22c33', function () {
		assert.deepEqual('a1b2c3'.replace(/(\d)/g, '$1$1'), 'a11b22c33');
	});
})

describe('Exercise 45', function() {
	it('Check mymail@mail.ru', function () {
		assert.deepEqual(/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test('mymail@mail.ru'), true)
	});
	it('Check my.mail@mail.ru', function () {
		assert.deepEqual(/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test('my.mail@mail.ru'), true)
	});
	it('Check my-mail@mail.ru', function () {
		assert.deepEqual(/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test('my-mail@mail.ru'), true)
	});
	it('Check my_mail@mail.ru', function () {
		assert.deepEqual(/^[a-zA-Z-._]+@[a-z]+\.[a-z]{2,3}$/.test('my_mail@mail.ru'), true)
	});
	it('Check mail@mail.com', function () {
		assert.deepEqual(/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test('mail@mail.com'), true)
	});
	it('Check mail@mail.by', function () {
		assert.deepEqual(/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test('mail@mail.by'), true)
	});
	it('Check mail@yandex.ru', function () {
		assert.deepEqual(/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test('mail@yandex.ru'), true)
	});
});

describe('Exercise 46', function () {
	it('Check emails', function () {
		assert.deepEqual('mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru'.match(/[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}/g), ['mymail@mail.ru', 'my.mail@mail.ru', 'my-mail@mail.ru'])
	});
})

describe('Exercise 47', function () {
	it('Check site.ru', function () {
		assert.deepEqual(/[a-zA-Z-.]+\.[a-z]+/.test('site.ru'), true)
	});
	it('Check site.com', function () {
		assert.deepEqual(/[a-zA-Z-.]+\.[a-z]+/.test('site.com'), true)
	});
	it('Check my-site.ru', function () {
		assert.deepEqual(/[a-zA-Z-.]+\.[a-z]+/.test('my-site.ru'), true)
	});
})

describe('Exercise 48, 49, 50', function () {
	it('Check http://site.ru', function () {
		assert.deepEqual(/^(http:\/\/||https:\/\/)[a-zA-Z-.]+\.[a-z]+/.test('http://site.ru'), true)
	});
	it('Check http://site.com', function () {
		assert.deepEqual(/^(http:\/\/||https:\/\/)[a-zA-Z-.]+\.[a-z]+/.test('http://site.com'), true)
	});
})

describe('Exercise 51, 52, 53, 54', function () {
	it('Check index.txt', function () {
		assert.deepEqual(/[a-zA-Z-.]+\.(html||txt||php)$/.test('index.txt'), true)
	});
	it('Check index.html', function () {
		assert.deepEqual(/[a-zA-Z-.]+\.(html||txt||php)$/.test('index.html'), true)
	});
	it('Check index.php', function () {
		assert.deepEqual(/[a-zA-Z-.]+\.(html||txt||php)$/.test('index.php'), true)
	});
	it('Check picture.jpeg', function () {
		assert.deepEqual(/[a-zA-Z-.]+\.(jpg||jpeg)$/.test('picture.jpeg'), true)
	});
	it('Check picture.jpg', function () {
		assert.deepEqual(/[a-zA-Z-.]+\.(jpg||jpeg)$/.test('picture.jpg'), true)
	});
	it('Check 123456789012', function () {
		assert.deepEqual(/^([0-9]{0,12})$/.test('123456789012'), true)
	});
	it('Check summ', function () {
		assert.deepEqual(exerciseFiftyFour('dsaf 32 fd 3 df3 fds 32 sdf 12'), 82)
	});
})

describe('Exercise 55, 56, 57, 58', function () {
	it('Exercise 55 site.ru', function () {
		assert.deepEqual('http://site.ru'.replace(/http:\/\/site.(ru|com)/, '<a href="http://site.ru">site.ru</a>'), '<a href="http://site.ru">site.ru</a>')
	});
	it('Exercise 55 site.com', function () {
		assert.deepEqual('http://site.com'.replace(/http:\/\/site.(ru|com)/, '<a href="http://site.ru">site.ru</a>'), '<a href="http://site.ru">site.ru</a>')
	});
	it('Exercise 56', function () {
		assert.deepEqual('sdf df dsd 32    24sd              dsff'.replace(/\s+/g, ' '), 'sdf df dsd 32 24sd dsff')
	});
	it('Exercise 57', function () {
		assert.equal('/* Однострочный комментарий */'.replace(/\/*\**/g, ''), ' Однострочный комментарий ')
	});
	it('Exercise 58', function () {
		assert.deepEqual(/[a-zA-Z-.]+\.(jpg||jpeg)$/.test('picture.jpg'), true)
	});
})

describe('Exercise 59, 60', function () {
	it('Exercise  59', function () {
		assert.deepEqual('aaab'.replace(/aaa(?=b)/, '!'), '!b')
	});
	it('Exercise 60', function () {
		assert.deepEqual('aaaw'.replace(/aaa(?!b)/, '!'), '!w')
	});
})

describe('Exercise 61, 62, 63, 64', function () {
	it('Exercise  61', function () {
		assert.deepEqual('a1b5c8'.replace(/(\d)/g, (numb)=>{
			return Math.pow(parseInt(numb), 2)
		}), 'a1b25c64')
	});
	it('Exercise 62', function () {
		assert.deepEqual("2aaa'3'bbb'4'".replace(/(?!')(\d)(?=')/g, (numb)=>{
			return numb*2
		}), "2aaa'6'bbb'8'")
	});
	it('Exercise  63', function () {
		assert.deepEqual("2aaa{{текст}}b{{текст}}текст45'321{{текст}}'".replace(/(?!\{)([а-яА-Я]*)(?=})/g, (text)=>{
			return text.split('').reverse().join('')
		}), "2aaa{{тскет}}b{{тскет}}текст45'321{{тскет}}'")
	});
	it('Exercise 64', function () {
		assert.deepEqual('23 + 35 ='.replace(/(\d*) \+ (\d*) =/g, (match, p1, p2)=> {
			const sum = parseInt(p1) + parseInt(p2)
			return [p1, '+', p2, '=', sum].join(' ')
		}), '23 + 35 = 58')
	});
})

describe('Exercise 65, 66, 67, 68, 69, 70', function () {
	it('Exercise  65', function () {
		assert.deepEqual(/(1|2)(9|1|0)[0-9][0-9]/.test('2190'), true)
	});
	it('Exercise 66', function () {
		assert.deepEqual(/^([0-1][0-9]|2[0-3]):[0-9]{2}$/.test('21:39'), true)
	});
	it('Exercise  67 9.59 am', function () {
		assert.deepEqual(/^([1-9]|1[0-2])\.[0-5][0-9] (am|pm)$/.test('9.59 am'), true)
	});
	it('Exercise  67 12.30 pm', function () {
		assert.deepEqual(/^([1-9]|1[0-2])\.[0-5][0-9] (am|pm)$/.test('12.30 pm'), true)
	});
	it('Exercise 68', function () {
		assert.deepEqual('aafdngd dfdfnndgs ewrwoo erqf efdfag32'.replace(/\s*\w*([a-z]+)\1\w*\s*/g, ''), 'erqf efdfag32')
	});
	it('Exercise 69', function () {
		assert.deepEqual('dsf xxx xxx sd'.replace(/( [a-z]+)\1/g, '$1'), 'dsf xxx sd')
	});
	it('Exercise 70', function () {
		assert.deepEqual('dsf xxx xxx xxx xxx xxx sd'.replace(/( [a-z]+)(?= [a-z]+)\1/g, ''), 'dsf xxx sd')
	});
})
