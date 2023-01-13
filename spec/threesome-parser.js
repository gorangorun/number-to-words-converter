import { expect } from 'chai'
import { ThreesomeParser } from '../src/threesome-parser.js'

describe('toObject', () => {
  const tests = [
    { input: 0, expect: { hundreds: undefined, tens: undefined, ones: 0 } },
    { input: 1, expect: { hundreds: undefined, tens: undefined, ones: 1 } },
    { input: 2, expect: { hundreds: undefined, tens: undefined, ones: 2 } },
    { input: 3, expect: { hundreds: undefined, tens: undefined, ones: 3 } },
    { input: 4, expect: { hundreds: undefined, tens: undefined, ones: 4 } },
    { input: 5, expect: { hundreds: undefined, tens: undefined, ones: 5 } },
    { input: 6, expect: { hundreds: undefined, tens: undefined, ones: 6 } },
    { input: 7, expect: { hundreds: undefined, tens: undefined, ones: 7 } },
    { input: 8, expect: { hundreds: undefined, tens: undefined, ones: 8 } },
    { input: 9, expect: { hundreds: undefined, tens: undefined, ones: 9 } },
    { input: 10, expect: { hundreds: undefined, tens: undefined, ones: 10 } },
    { input: 11, expect: { hundreds: undefined, tens: undefined, ones: 11 } },
    { input: 12, expect: { hundreds: undefined, tens: undefined, ones: 12 } },
    { input: 13, expect: { hundreds: undefined, tens: undefined, ones: 13 } },
    { input: 14, expect: { hundreds: undefined, tens: undefined, ones: 14 } },
    { input: 15, expect: { hundreds: undefined, tens: undefined, ones: 15 } },
    { input: 16, expect: { hundreds: undefined, tens: undefined, ones: 16 } },
    { input: 17, expect: { hundreds: undefined, tens: undefined, ones: 17 } },
    { input: 18, expect: { hundreds: undefined, tens: undefined, ones: 18 } },
    { input: 19, expect: { hundreds: undefined, tens: undefined, ones: 19 } },
    { input: 20, expect: { hundreds: undefined, tens: 2, ones: undefined } },
    { input: 22, expect: { hundreds: undefined, tens: 2, ones: 2 } },
    { input: 30, expect: { hundreds: undefined, tens: 3, ones: undefined } },
    { input: 33, expect: { hundreds: undefined, tens: 3, ones: 3 } },
    { input: 40, expect: { hundreds: undefined, tens: 4, ones: undefined } },
    { input: 44, expect: { hundreds: undefined, tens: 4, ones: 4 } },
    { input: 50, expect: { hundreds: undefined, tens: 5, ones: undefined } },
    { input: 55, expect: { hundreds: undefined, tens: 5, ones: 5 } },
    { input: 60, expect: { hundreds: undefined, tens: 6, ones: undefined } },
    { input: 66, expect: { hundreds: undefined, tens: 6, ones: 6 } },
    { input: 70, expect: { hundreds: undefined, tens: 7, ones: undefined } },
    { input: 77, expect: { hundreds: undefined, tens: 7, ones: 7 } },
    { input: 80, expect: { hundreds: undefined, tens: 8, ones: undefined } },
    { input: 88, expect: { hundreds: undefined, tens: 8, ones: 8 } },
    { input: 90, expect: { hundreds: undefined, tens: 9, ones: undefined } },
    { input: 99, expect: { hundreds: undefined, tens: 9, ones: 9 } },
    { input: 100, expect: { hundreds: 1, tens: undefined, ones: undefined } },
    { input: 101, expect: { hundreds: 1, tens: undefined, ones: 1 } },
    { input: 110, expect: { hundreds: 1, tens: undefined, ones: 10 } },
    { input: 111, expect: { hundreds: 1, tens: undefined, ones: 11 } },
    { input: 112, expect: { hundreds: 1, tens: undefined, ones: 12 } },
    { input: 120, expect: { hundreds: 1, tens: 2, ones: undefined } },
    { input: 122, expect: { hundreds: 1, tens: 2, ones: 2 } },
    { input: 200, expect: { hundreds: 2, tens: undefined, ones: undefined } },
    { input: 222, expect: { hundreds: 2, tens: 2, ones: 2 } },
    { input: 300, expect: { hundreds: 3, tens: undefined, ones: undefined } },
    { input: 333, expect: { hundreds: 3, tens: 3, ones: 3 } },
    { input: 400, expect: { hundreds: 4, tens: undefined, ones: undefined } },
    { input: 444, expect: { hundreds: 4, tens: 4, ones: 4 } },
    { input: 500, expect: { hundreds: 5, tens: undefined, ones: undefined } },
    { input: 555, expect: { hundreds: 5, tens: 5, ones: 5 } },
    { input: 900, expect: { hundreds: 9, tens: undefined, ones: undefined } },
    { input: 999, expect: { hundreds: 9, tens: 9, ones: 9 } },
    { input: 123456, expect: { hundreds: 4, tens: 5, ones: 6 } }
  ];

  function addTest(test) {
    it(`should pass if ${test.input} returns ${JSON.stringify(test.expect)}`, () => {
      expect(new ThreesomeParser(test.input).toObject).to.deep.equal(test.expect)
    })
  }

  tests.forEach(addTest)
})
