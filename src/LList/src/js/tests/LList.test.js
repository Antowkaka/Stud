const { LList } = require('../LList');

describe('addStartTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('Input 45, check return func (size)', function() {
    assert.equal(testArr.addStart(45), 8);
  });
  it('input 24, check testArr.root', function() {
    testArr.reset();
    testArr.addStart(24);
    assert.deepEqual(testArr.root.value, 24);
  });
});
describe('addEndTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('input 55, check func return (size)', function() {
    assert.equal(testArr.addEnd(55), 8);
  });
  it('input 89, check last elem val in func toArray', function() {
    testArr.reset();
    testArr.addEnd(89);
    assert.deepEqual(testArr.toArray()[testArr.size() - 1].value, 89);
  });
});
describe('addPosTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('input 100, check func return (size)', function() {
    assert.equal(testArr.addPos(2, 100), 8);
  });
  it('input 86 in pos - 2, check pos elem val in func toArray', function() {
    testArr.reset();
    testArr.addPos(2, 86);
    assert.deepEqual(testArr.toArray()[2].value, 86);
  });
});
describe('delFirstTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('delFirst worked', function() {
    assert.deepEqual(testArr.delFirst(), 3);
  });
  it('check first node val', function() {
    testArr.reset();
    testArr.delFirst();
    assert.deepEqual(testArr.toArray()[0].value, 5);
  });
});
describe('delEndTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('delEnd worked', function() {
    assert.deepEqual(testArr.delEnd(), 8);
  });
  it('check last node val', function() {
    testArr.reset();
    testArr.delEnd();
    assert.deepEqual(testArr.toArray()[testArr.size() - 1].value, 4);
  });
});
describe('delPosTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('delPos worked', function() {
    assert.deepEqual(testArr.delPos(3), 2);
  });
  it('check pos (3) node val, expect val next elem ()', function() {
    testArr.reset();
    testArr.delPos(3);
    assert.deepEqual(testArr.toArray()[3].value, 7);
  });
});
describe('getTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('correct index input in get', function() {
    assert.equal(testArr.get(2), 8);
  });
  it('incorrect index input in get', function() {
    assert.equal(testArr.get(7), 'Index not defined');
  });
});
describe('setTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('check pos node val', function() {
    testArr.set(2, 9);
    assert.deepEqual(testArr.toArray()[2].value, 9);
  });
  it('check size node, expect node.length after .set == default node.length', function() {
    testArr.set(2, 9);
    assert.deepEqual(testArr.size(), 7);
  });
  it('incorrect index input in get', function() {
    assert.deepEqual(testArr.set(7, 6), 'Index not defined');
  });
});
describe('toStringTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('toString worked', function() {
    assert.deepEqual(testArr.toString(), '3582748');
  });
});
describe('maxTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('max worked', function() {
    assert.deepEqual(testArr.max(), 8);
  });
});
describe('minTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('min worked', function() {
    assert.deepEqual(testArr.min(), 2);
  });
});
describe('sizeTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('size worked', function() {
    assert.deepEqual(testArr.size(), 7);
  });
});
describe('resetTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('size worked', function() {
    assert.equal(testArr.reset(), 'Reset!');
  });
});
describe('sortTest', function() {
  it('sort worked', function() {
    const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
    assert.deepEqual(testArr.sort(), [2, 3, 4, 5, 7, 8, 8]);
  });
});
describe('maxIndexTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('maxIndex worked', function() {
    assert.equal(testArr.maxIndex(), 2);
  });
});
describe('minIndexTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('minIndex worked', function() {
    assert.deepEqual(testArr.minIndex(), 3);
  });
});
describe('reverseTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('reverse worked', function() {
    assert.deepEqual(testArr.reverse(), [8, 4, 7, 2, 8, 5, 3]);
  });
});
describe('halfReverseTest', function() {
  const testArr = new LList([3, 5, 8, 2, 7, 4, 8]);
  it('halfReverse worked n%2 != 0', function() {
    assert.deepEqual(testArr.halfReverse(), [7, 4, 8, 2, 3, 5, 8]);
  });
  it('halfReverse worked n%2 == 0', function() {
    testArr.reset();
    testArr.addStart(9);
    assert.equal(testArr.halfReverse(), [2, 7, 4, 8, 9, 3, 5, 8]);
  });
});
