// Toggle sidebar
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const toggleDemo = document.getElementById('toggleDemo');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

toggleDemo.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Inicialização
handleMobileView();
window.addEventListener('resize', handleMobileView);

// Adicionar interação aos itens do menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Remove active de todos os itens
        menuItems.forEach(i => i.classList.remove('active'));
        // Adiciona active ao item clicado
        e.currentTarget.classList.add('active');
    });
});