const counterNode = document.querySelector('.counter')

const button1 = document.querySelector('.js-button')

const button2 = document.querySelector('.js-button2')


const ScipNOde = document.querySelector('.js-scip')


let scip = 0

let counter = 0

button1.addEventListener('click', function(){



counter = counter + 1


counterNode.innerText = counter



})


button2.addEventListener('click', function(){



    counter = counter + 2
    
    
    counterNode.innerText = counter
    
    
    
    })

    
    

    ScipNOde.addEventListener('click',function(){


counter = counter - counter

counterNode.innerText = counter


return counter



    })
    