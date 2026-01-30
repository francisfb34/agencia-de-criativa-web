
    // Menu mobile toggle
    document.addEventListener('DOMContentLoaded', function() {
      const menuToggle = document.querySelector('.cabecalho__menu-toggle');
      const navegacao = document.querySelector('.cabecalho__navegacao');
      
      if (menuToggle) {
        menuToggle.addEventListener('click', function() {
          navegacao.classList.toggle('cabecalho__navegacao--ativo');
          menuToggle.classList.toggle('cabecalho__menu-toggle--ativo');
        });
      }
      
      // Fechar menu ao clicar em um link
      const menuLinks = document.querySelectorAll('.cabecalho__link');
      menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          navegacao.classList.remove('cabecalho__navegacao--ativo');
          menuToggle.classList.remove('cabecalho__menu-toggle--ativo');
        });
      });
      
      // Validação do formulário
      const formContato = document.getElementById('form-contato');
      if (formContato) {
        formContato.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const nome = document.getElementById('nome').value.trim();
          const email = document.getElementById('email').value.trim();
          const mensagem = document.getElementById('mensagem').value.trim();
          
          if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios (*)');
            return;
          }
          
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido');
            return;
          }
          
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
      
      // Ativar link do menu conforme scroll
      window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.cabecalho__link');
        
        let current = '';
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
          }
        });
        
        navLinks.forEach(link => {
          link.classList.remove('cabecalho__link--ativo');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('cabecalho__link--ativo');
          }
        });
      });
    });
  
