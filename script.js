// Menu responsivo (hambúrguer)
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const menuNavegacao = document.querySelector('.menu-navegacao');
    
    menuToggle.addEventListener('click', function() {
        menuNavegacao.classList.toggle('ativo');
        this.classList.toggle('ativo');
    });
    
    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu-navegacao a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuNavegacao.classList.remove('ativo');
            menuToggle.classList.remove('ativo');
        });
    });
    
    // Formulário de contato
    const formContato = document.getElementById('form-contato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Simulação de envio
            alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
            formContato.reset();
        });
    }
    
    // Ativar link ativo no menu conforme rolagem
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const menuLinks = document.querySelectorAll('.menu-navegacao a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        menuLinks.forEach(link => {
            link.classList.remove('ativo');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('ativo');
            }
        });
    });
    
    // Animar elementos ao rolar a página
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animar');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const elementosParaAnimar = document.querySelectorAll('.servico-card, .depoimento-card, .valor');
    elementosParaAnimar.forEach(elemento => {
        observer.observe(elemento);
    });
});