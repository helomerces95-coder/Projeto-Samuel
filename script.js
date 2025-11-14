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

// Para mobile
function handleMobileView() {
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('collapsed');
        sidebar.classList.add('active');
    } else {
        sidebar.classList.remove('active');
    }
}

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