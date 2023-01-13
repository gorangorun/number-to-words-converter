export class ThreesomeParser {
  constructor(number) {
    this.number = number
    let [ right, middle, left ] = number.toString().split('').reverse()
    this.left = left === undefined ? left : parseInt(left)
    this.middle = middle === undefined ? middle : parseInt(middle)
    this.right = right === undefined ? right : parseInt(right)
  }

  get toObject() {
    return {
      hundreds: this.hundreds,
      tens: this.tens,
      ones: this.ones
    }
  }

  get hundreds() {
    return this.left
  }

  get tens() {
    if (this.middle > 1) {
      return this.middle
    }

    return undefined
  }

  get ones() {
    if (this.number === 0) {
      return 0
    } else if (this.middle === 1) {
      return parseInt(`${this.middle}${this.right}`)
    } else if (this.right === 0) {
      return undefined
    }

    return this.right
  }
}
