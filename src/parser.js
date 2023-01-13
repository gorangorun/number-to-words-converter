const POSITIONS = ['hundreds', 'thousands', 'millions', 'billions', 'trillions', 'quadrillions']

export class Parser {
  constructor(number) {
    this.number = number
    let [ left, right ] = this.toPositive.toString().split('.')
    this.leftPart = left === undefined ? left : parseInt(left)
    this.rightPart = right === undefined ? right : parseInt(right)
  }

  get toObject() {
    return {
      isNegative: this.isNegative,
      left: this.left,
      right: this.right
    }
  }

  get isNegative() {
    return this.number < 0 ? true : false
  }

  get toPositive() {
    return this.isNegative ? (this.number * -1) : this.number
  }

  get left() {
    return this.toChunks(this.leftPart)
  }

  get right() {
    return this.rightPart
    return this.toChunks(this.rightPart)
  }

  toChunks(number) {
    const chunks = []

    for (let i = number.toString().length, m = 0; i > 0; i -= 3, m++) {
      let value = parseInt(number.toString().substring(i, i - 3))
      let position = POSITIONS[m]
      let index = m
      chunks.push({ value: value, position: position, index: index })
    }

    return chunks
  }
}
