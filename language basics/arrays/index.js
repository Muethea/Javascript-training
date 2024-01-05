// var array = [2, 3,6, 4,9]

// array.forEach(function (element) {
//   console.log(element)
// })

// var array = [2, 3, 6, 4, 9]

// // array.push(3)
// // array.pop()
// // array.unshift(3)
// array.shift()
// console.log(array)

var array = [4, 5, 7, 9, 20]

// console.log(array.map(function(value){
//   return value
// }))

console.log(
  array.reduce(function (total, value) {
    return total + value
  })
)
