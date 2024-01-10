var inner = document.querySelector('#inner')
var outer = document.querySelector('#outer')

inner.addEventListener('click', event => {
  console.log(event.bubbles)
  event.stopPropagation()
})

outer.addEventListener('click', e => {
  console.log(`X= ${e.clientX}, Y= ${e.clientY}`)
})
