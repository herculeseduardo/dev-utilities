const iteratorString = str => {
  const iter = str[Symbol.iterator]()
  let counter = 0
  for (const letter of iter) {
    let decimalChar = letter.codePointAt(0)
    console.log(`the character ${letter} is ${decimalChar}`)
    counter += Number(decimalChar)
  }
  return counter
}

const iteratorNumbers = numsArray => {
  const iter = numsArray[Symbol.iterator]()
  for (const num of iter) {
    console.log(num)
  }
}

module.exports = {
  iteratorString,
  iteratorNumbers
}
