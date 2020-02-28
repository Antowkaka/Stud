const mathFunc = require('../logic');

describe('multiplyTest', function(){
    it('input: 5 -3', function(){
        assert.equal(mathFunc.multiply(5, -3), -15);
    });
    it('input: 5.5 3.7', function(){
        assert.equal(mathFunc.multiply(5.5, 3.7), 20.35);
    });
    it('input: 5 ', function(){
        assert.equal(mathFunc.multiply(5), undefined);
    });
    it('input: "string" ', function(){
        assert.equal(mathFunc.multiply("string"), undefined);
    });
    it('input: null ', function(){
        assert.equal(mathFunc.multiply(null), undefined);
    });
    it('input: undefined ', function(){
        assert.equal(mathFunc.multiply(undefined), undefined);
    });
    it('input: NaN ', function(){
        assert.equal(mathFunc.multiply(NaN), undefined);
    });
});

describe('divisionTest', function(){
    it('input: 10 2', function(){
        assert.equal(mathFunc.division(10, 2), 5);
    });
    it('input: 7.1 4.6', function(){
        assert.equal(mathFunc.division(7.1, 4.6), 1.5434782608695652);
    });
    it('input: 5 ', function(){
        assert.equal(mathFunc.division(5), undefined);
    });
    it('Zero division', function(){
        assert.equal(mathFunc.division(45, 0), 'Zero division');
    });
    it('input: "string" ', function(){
        assert.equal(mathFunc.division("string"), undefined);
    });
    it('input: null ', function(){
        assert.equal(mathFunc.division(null), undefined);
    });
    it('input: undefined ', function(){
        assert.equal(mathFunc.division(undefined), undefined);
    });
    it('input: NaN ', function(){
        assert.equal(mathFunc.division(NaN), undefined);
    });
});

describe('summTest', function(){
    it('input: 10 45', function(){
        assert.equal(mathFunc.summ(12, 45), 57);
    });
    it('input: 12.6 9.5', function(){
        assert.equal(mathFunc.summ(12.6, 9.5), 22.1);
    });
    it('input: 5 ', function(){
        assert.equal(mathFunc.summ(5), undefined);
    });
    it('input: "string" ', function(){
        assert.equal(mathFunc.summ("string"), undefined);
    });
    it('input: null ', function(){
        assert.equal(mathFunc.summ(null), undefined);
    });
    it('input: undefined ', function(){
        assert.equal(mathFunc.summ(undefined), undefined);
    });
    it('input: NaN ', function(){
        assert.equal(mathFunc.summ(NaN), undefined);
    });
});

describe('diffTest', function(){
    it('input: 54 32', function(){
        assert.equal(mathFunc.diff(54, 32), 22);
    });
    it('input: 1.1 2.2', function(){
        assert.deepEqual(mathFunc.diff(1.1, 2.2), -1.1);
    });
    it('input: 5 ', function(){
        assert.equal(mathFunc.diff(5), undefined);
    });
    it('input: "string" ', function(){
        assert.equal(mathFunc.diff("string"), undefined);
    });
    it('input: null ', function(){
        assert.equal(mathFunc.diff(null), undefined);
    });
    it('input: undefined ', function(){
        assert.equal(mathFunc.diff(undefined), undefined);
    });
    it('input: NaN ', function(){
        assert.equal(mathFunc.diff(NaN), undefined);
    });
});
