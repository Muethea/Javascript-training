var array = [2, 4, 6, 7, 8, 9, 14]

for (let index = 0; index < array.length; index++) {
  try {
    const element = array[index]

    console.log(element)
  } catch (error) {
    console.log(error)
  }
}
