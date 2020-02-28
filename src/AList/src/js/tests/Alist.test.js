const { AList } = require('../AList');

describe('initTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('Init work', function () {
        aList.init();
        assert.deepEqual(aList.arr, aList.defArr);
    });
});
describe('addStartTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('Input 45, check return func (size)', function () {
        assert.equal(aList.addStart(45), 6)
    });
    it('input 24, check aList.arr', function () {
        aList.reset();
        aList.addStart(24);
        assert.deepEqual(aList.arr,[24, 35, 89, 54, 39, 12])
    });
});
describe('addEndTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('input 55, check func return (size)', function () {
        assert.equal(aList.addEnd(55), 6)
    })
    it('input 89, check aList.arr', function () {
        aList.reset();
        aList.addEnd(89);
        assert.deepEqual(aList.arr, [35, 89, 54, 39, 12, 89])
    })
});
describe('addPosTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('input 100, check func return (size)', function () {
        assert.equal(aList.addPos(2, 100), 6)
    })
    it('input 86, check aList.arr', function () {
        aList.reset();
        aList.addPos(2, 89);
        assert.deepEqual(aList.arr, [35, 89, 89, 54, 39, 12])
    })
});
describe('delFirstTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('delFirst worked', function () {
        assert.deepEqual(aList.delFirst(), 35)
    })
    it('check aList.arr', function () {
        aList.reset();
        aList.delFirst(35);
        assert.deepEqual(aList.arr, [89, 54, 39, 12])
    })
});
describe('delEndTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('delEnd worked', function () {
        assert.deepEqual(aList.delEnd(), 12)
    })
    it('check aList.arr', function () {
        aList.reset();
        aList.delEnd(35);
        assert.deepEqual(aList.arr, [35, 89, 54, 39])
    })
});
describe('delPosTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('delPos worked', function () {
        assert.deepEqual(aList.delPos(3), 39)
    })
    it('check aList.arr', function () {
        aList.reset();
        aList.delPos(3);
        assert.deepEqual(aList.arr, [35, 89, 54, 12])
    })
});
describe('getTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('correct index input in get', function () {
        assert.equal(aList.get(2), 54)
    })
    it('incorrect index input in get', function () {
        assert.equal(aList.get(5), undefined)
    })
});
describe('setTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('check aList.arr', function () {
        aList.set(2, 9)
        assert.deepEqual(aList.arr, [35, 89, 9, 39, 12])
    })
    it('incorrect index input in get', function () {
        assert.deepEqual(aList.set(5, 6), 'Index not defined')
    })
});
describe('toStringTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('toString worked', function () {
        assert.deepEqual(aList.toString(), '3589543912')
    })
});
describe('maxTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('max worked', function () {
        assert.deepEqual(aList.max(), 89)
    })
});
describe('minTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('min worked', function () {
        assert.deepEqual(aList.min(), 12)
    })
});
describe('sizeTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('size worked', function () {
        assert.deepEqual(aList.size(), 5)
    })
});
describe('resetTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('size worked', function () {
        assert.deepEqual(aList.reset(), 'Reset')
    })
});
describe('sortTest', function () {
    it('sort worked', function () {
        const aList = new AList([35, 89, 54, 39, 12]);
        assert.deepEqual(aList.sort(), [12, 35, 39, 54, 89])
    })
});
describe('maxIndexTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('maxIndex worked', function () {
        assert.equal(aList.maxIndex(), 1)
    })
});
describe('minIndexTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('minIndex worked', function () {
        assert.deepEqual(aList.minIndex(), 4)
    })
});
describe('reverseTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('reverse worked', function () {
        assert.deepEqual(aList.reverse(), [12, 39, 54, 89, 35])
    })
});
describe('halfReverseTest', function () {
    const aList = new AList([35, 89, 54, 39, 12]);
    it('halfReverse worked n%2 != 0', function () {
        assert.deepEqual(aList.halfReverse(), [39, 12, 54, 35, 89])
    })
    it('halfReverse worked n%2 == 0', function () {
        aList.reset();
        aList.addStart(37);
        assert.deepEqual(aList.halfReverse(), [54, 39, 12, 37, 35, 89])
    })
});
