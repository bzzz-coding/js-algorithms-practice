function convertToDecimal(binaryStr) {
  let result = 0
  for (let i = binaryStr.length - 1; i >= 0; i--) {
    if (binaryStr[i] === '1') {
      let power = binaryStr.length - 1 - i
      result += 2 ** power
    }
  }
  return result
}

console.log(convertToDecimal('10101'))
console.log(convertToDecimal('1111'))
console.log(convertToDecimal('1'))
console.log(convertToDecimal('100000'))
console.log(convertToDecimal('0'))
console.log(convertToDecimal(''))

function convertToBinary(int) {
  if (int === 0) {
    return '0'
  }
  let power = Math.floor(Math.log2(int))
  let result = new Array(power + 1).fill('0')
  for (let i = 0; i < result.length; i++) {
    if (int >= 2 ** power) {
      result[i] = '1'
      int -= 2 ** power
    }
    power--
  }
  return result.join('')
}

console.log(convertToBinary(21))
console.log(convertToBinary(15))
console.log(convertToBinary(1))
console.log(convertToBinary(32))
console.log(convertToBinary(0))

