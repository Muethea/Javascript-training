var today = new Date()

var day = today.getDate()
var month = today.getUTCMonth()
var hour = today.getHours()
var minuts = today.getMinutes()

console.log(` ${day} of ${month}  ${hour}H:${minuts}`)
