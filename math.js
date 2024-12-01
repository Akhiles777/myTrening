const button = document.querySelector('.js-button')

fetch("https://dog.ceo/api/breeds/image/random")

.then(response => response.json())




.then((res) => {

button.addEventListener('click', function(){


document.querySelector('.js-img').innerHTML = `<img src=${res.message}>`


})

})