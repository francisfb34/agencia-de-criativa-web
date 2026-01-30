// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu__toggle');
  const menuLista = document.querySelector('.menu__lista');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuLista.classList.toggle('menu__lista--aberto');
      const isOpen = menuLista.classList.contains('menu__lista--aberto');
      
      // Animar as barras do hamburger
      const hamburguer = this.querySelector('.menu__hamburger');
      if (isOpen) {
        hamburguer.style.transform = 'rotate(45deg)';
        hamburguer.style.position = 'relative';
        hamburguer.style.top = '9px';
      } else {
        hamburguer.style.transform = 'rotate(0)';
        hamburguer.style.position = 'static';
        hamburguer.style.top = '0';
      }
    });
  }
  
  // Fechar menu ao clicar em um link
  const menuLinks = document.querySelectorAll('.menu__link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLista.classList.remove('menu__lista--aberto');
    });
  });
  
  // Validação do formulário
  const formContato = document.getElementById('form-contato');
  if (formContato) {
    formContato.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validação simples
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
      
      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios (*)');
        return;
      }
      
      // Validação de email básica
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido');
        return;
      }
      
      // Simulação de envio
      const botao = formContato.querySelector('button[type="submit"]');
      const textoOriginal = botao.textContent;
      
      botao.textContent = 'Enviando...';
      botao.disabled = true;
      
      setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        formContato.reset();
        botao.textContent = textoOriginal;
        botao.disabled = false;
      }, 1500);
    });
  }
  
  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.querySelector('.cabecalho').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Efeito de fade-in ao scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('elemento-visible');
      }
    });
  }, observerOptions);
  
  // Observar elementos para animação
  document.querySelectorAll('.servico-card, .depoimento-card, .valor').forEach(el => {
    observer.observe(el);
  });
});
