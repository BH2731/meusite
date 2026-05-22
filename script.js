document.addEventListener("DOMContentLoaded", () => {
    // Cria o observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Se quiser que a animação repita ao subir a página, deixe a linha abaixo. 
                // Se quiser que anime só na primeira vez, apague a linha abaixo.
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    });

    // Seleciona todos os elementos que devem ser animados
    const hiddenElements = document.querySelectorAll('.hidden, .hidden-left, .hidden-right');
    
    // Pede ao observador para vigiar cada um deles
    hiddenElements.forEach((el) => observer.observe(el));
});

