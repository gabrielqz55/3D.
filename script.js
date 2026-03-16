// Seleciona todas as seções (slides) do site
const slides = document.querySelectorAll('.slide');

// Função que muda a cor do fundo baseado no slide visível
window.addEventListener('scroll', () => {
    let current = '';

    slides.forEach(slide => {
        const slideTop = slide.offsetTop;
        const slideHeight = slide.clientHeight;
        
        // Verifica se o scroll está dentro daquela seção
        if (pageYOffset >= (slideTop - slideHeight / 3)) {
            current = slide.getAttribute('id');
        }
    });

    // Efeito de mudança de cor conforme o slide
    if (current === 'slide1') {
        document.body.style.backgroundColor = '#dcfce7'; // Verde claro
    } else if (current === 'slide4') {
        document.body.style.backgroundColor = '#fef3c7'; // Amarelo claro (alerta queimada)
    } else if (current === 'slide3') {
        document.body.style.backgroundColor = '#dbeafe'; // Azul claro (O Boticário)
    }
});

// Comentário para o seu aprendizado:
// O 'addEventListener' fica vigiando o movimento do mouse (scroll).
// O 'if (current === ...)' verifica em qual parte do trabalho você está.