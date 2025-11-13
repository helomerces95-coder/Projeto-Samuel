var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=> 
        item.classList.remove('ativo') //Remove a classe 'ativo' de um item que eu não cliquei
    )
    this.classList.add('ativo') // Adiciona a classe 'ativo' em um item que eu cliquei
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

// Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})