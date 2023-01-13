import { expect } from 'chai'
import { Parser } from '../src/parser.js'
import { MAX_SAFE_INTEGER, formatNumber } from './helpers.js'

describe('toObject', () => {
  const tests = [
    {
      input: -1,
      expect: {
        isNegative: true,
        left: [
          { value: 1, position: 'hundreds', index: 0 }
        ],
        right: undefined
      }
    },
    {
      input: -5.10,
      expect: {
        isNegative: true,
        left: [
          { value: 5, position: 'hundreds', index: 0 }
        ],
        right: 1
      }
    },
    {
      input: 0,
      expect: {
        isNegative: false,
        left: [
          { value: 0, position: 'hundreds', index: 0 }
        ],
        right: undefined
      }
    },
    {
       input: MAX_SAFE_INTEGER,
       expect: {
         isNegative: false,
         left: [
           { position: 'hundreds', value: 991, index: 0 },
           { position: 'thousands', value: 740, index: 1 },
           { position: 'millions', value: 254, index: 2 },
           { position: 'billions', value: 199, index: 3 },
           { position: 'trillions', value: 7, index: 4 },
           { position: 'quadrillions', value: 9, index: 5 }
         ],
         right: undefined
       }
     }
  ]

  function addTest(test) {
    it(`should pass if ${formatNumber(test.input)} returns ${JSON.stringify(test.expect)}`, () => {
      expect(new Parser(test.input).toObject).to.deep.equal(test.expect)
    })
  }

  tests.forEach(addTest)
})
