let attribute = document.getElementById('link')
let removeButton = document.getElementById('removeButton')

removeButton.addEventListener('click', () =>{
    attribute.removeAttribute('href')
})


