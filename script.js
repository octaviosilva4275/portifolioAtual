// Função para atualizar o item ativo no menu
function updateActiveMenu() {
    // Seleciona todas as seções e o menu
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menu li a');

    let currentSection = ''; // Variável para armazenar a seção visível na tela

    // Itera sobre todas as seções e verifica qual está visível na tela
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
            currentSection = section.getAttribute('id');
        }
    });

    // Atualiza o item ativo com base na seção visível
    menuLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1); // Extrai o ID da seção
        const parentLi = link.parentElement;

        if (sectionId === currentSection) {
            parentLi.classList.add('active'); // Adiciona a classe "active"
        } else {
            parentLi.classList.remove('active'); // Remove a classe "active"
        }
    });
}

// Função para rolar até a seção quando o item do menu for clicado
function smoothScroll(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
        top: targetSection.offsetTop - 60, // Ajusta a rolagem para o topo da seção
        behavior: 'smooth' // Anima a rolagem suave
    });
}

// Adiciona o ouvinte de evento para a rolagem da página
window.addEventListener('scroll', updateActiveMenu);

// Adiciona o ouvinte de evento para os links do menu
const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Chama a função para verificar o item ativo ao carregar a página
updateActiveMenu();


// Espera o DOM estar completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll('.menu a');

    // Adiciona um event listener para cada link
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();

            // Obtém o id da seção de destino a partir do href
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Desce a página 50px além do topo da seção
                window.scrollTo({
                    top: targetElement.offsetTop ,
                    behavior: 'smooth'  // Ativa a rolagem suave
                });
            }
        });
    });
});


