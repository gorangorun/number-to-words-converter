import { Parser } from './parser.js'
import { ThreesomeParser } from './threesome-parser.js'

const locale = {
  minus: 'minus',
  ones: [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ],
  tens: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  hundreds: ['hundred'],
  aboveHundred: ['thousand', 'million', 'billion', 'trillion', 'quadrillion']
}

export class NumberToWords {
  constructor(number) {
    this.number = new Parser(number)
    this.tensSeparator = '-'
    this.chunksSeparator = ', '
  }

  convert() {
    const words = []

    if (this.number.isNegative) {
      words.push(locale.minus)
    }

    words.push(this.leftSide())
    //words.push(this.rightSide())

    return words.join(' ')
  }

  leftSide() {
    const words = []

    if (this.number.left.length === 1 && this.number.left[0].value === 0) {
      return locale.ones[0]
    }

    this.number.left.filter(element => element.value > 0).forEach((chunk) => {
      words.unshift(this.toWords(chunk))

      if (chunk.position !== 'hundreds') {
        words[0] += ` ${this.aboveHundred(chunk)}`
      }
    })

    return words.join(this.chunksSeparator)
  }

  rightSide() {
    return ''
  }

  toWords(chunk) {
    chunk.threesome = new ThreesomeParser(chunk.value)
    const words = []

    if (chunk.threesome.hundreds !== undefined) {
      words.push(this.hundreds(chunk))
    }

    if (chunk.threesome.tens !== undefined) {
      words.push(this.tens(chunk))
    } 

    if (chunk.threesome.tens !== undefined && chunk.threesome.ones !== undefined) {
      words.push(this.tensSeparator)
    }

    if (chunk.threesome.ones !== undefined){
      words.push(this.ones(chunk))
    }

    return words.join(' ').replace(' - ', '-')
  }

  ones(chunk) {
    return locale.ones[chunk.threesome.ones]
  }

  tens(chunk) {
    return locale.tens[chunk.threesome.tens - 2]
  }

  hundreds(chunk) {
    return `${locale.ones[chunk.threesome.hundreds]} ${locale.hundreds[0]}`
  }

  aboveHundred(chunk) {
    return locale.aboveHundred[chunk.index - 1]
  }
}
