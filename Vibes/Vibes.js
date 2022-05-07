// Burger Menu

let burgerMenu = document.querySelector('#burgerMenu')
let navBurger = document.querySelector('.navBurger')

burgerMenu.addEventListener('click', function(){
    navBurger.classList.toggle('active') // toggle: switch entre la classe créé(classlist('acitve') puis l'enlever à chaque action programmer par addEventListener )
})

// Accordéon

let pAccordeon1 = document.querySelector('#pAccordeon1')
let pAccordeon2 = document.querySelector('#pAccordeon2')
let pAccordeon3 = document.querySelector('#pAccordeon3')

let h2ButtonAccordeon1 = document.querySelector('#h2ButtonAccordeon1')
let h2ButtonAccordeon2 = document.querySelector('#h2ButtonAccordeon2')
let h2ButtonAccordeon3 = document.querySelector('#h2ButtonAccordeon3')

let symbolAccordeon1 = document.querySelector('#symbolAccordeon1')
let symbolAccordeon2 = document.querySelector('#symbolAccordeon2')
let symbolAccordeon3 = document.querySelector('#symbolAccordeon3')

h2ButtonAccordeon1.addEventListener('click', function(){
   if(pAccordeon1.style.display == 'none'){       
        symbolAccordeon1.classList.replace('fa-plus', 'fa-minus')
        symbolAccordeon2.classList.replace('fa-minus', 'fa-plus')
        symbolAccordeon3.classList.replace('fa-minus', 'fa-plus')

    }
    pAccordeon1.style.display = 'block'
    pAccordeon2.style.display = 'none' 
    pAccordeon3.style.display = 'none'

    
})

h2ButtonAccordeon2.addEventListener('click', function(){
   if(pAccordeon2.style.display == 'none'){       
        symbolAccordeon2.classList.replace('fa-plus', 'fa-minus')
        symbolAccordeon1.classList.replace('fa-minus', 'fa-plus')
        symbolAccordeon3.classList.replace('fa-minus', 'fa-plus')
    }
    
    pAccordeon1.style.display = 'none'
    pAccordeon2.style.display = 'block'
    pAccordeon3.style.display = 'none'

    
})

h2ButtonAccordeon3.addEventListener('click', function(){
    if(pAccordeon3.style.display == 'none'){       
        symbolAccordeon1.classList.replace('fa-minus', 'fa-plus')
        symbolAccordeon2.classList.replace('fa-minus', 'fa-plus')
        symbolAccordeon3.classList.replace('fa-plus', 'fa-minus')
    }
    
    pAccordeon1.style.display = 'none'
    pAccordeon2.style.display = 'none'
    pAccordeon3.style.display = 'block'
})

