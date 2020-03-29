const { iteratorString, iteratorNumbers } = require('./iterator')

const main = () => {
  iteratorString('abcdefghijklmnopqrstuvwxyz')
  iteratorNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
}

main()
