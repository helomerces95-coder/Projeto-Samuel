// Toggle sidebar
const toggleBtn = document.getElementById('toggleSidebar'); // Tá pegando o botão do menu
const sidebar = document.querySelector('.sidebar');
const toggleDemo = document.getElementById('toggleDemo'); // Tá pegando o botão de demonstração

toggleBtn.addEventListener('click', () => { //Espera por um evento, nesse caso, um click do mouse, que vai alterar a sidebar (vai aumentar ou diminuir ela)
                                            // , pois ela ganha a classe "collapsed". No inicio, ela já está grande, então o primeiro click é para diminuir
    sidebar.classList.toggle('collapsed');
});

toggleDemo.addEventListener('click', () => { 
    sidebar.classList.toggle('collapsed');
});

// Adicionar interação aos itens do menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => { //Para cada item, espere um evento de click
    item.addEventListener('click', (e) => { //Esse "(e)" seria o evento do click em si
        menuItems.forEach(i => i.classList.remove('active')); //Remove o active de todos os itens da sidebar
        e.currentTarget.classList.add('active'); // Adiciona o active apenas no item clicado
    });
});