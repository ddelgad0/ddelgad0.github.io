document.addEventListener('DOMContentLoaded', () => {
    const filtros = document.querySelectorAll('.filtro');
    const projetos = document.querySelectorAll('.projeto');

    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            const tipo = filtro.getAttribute('data-filtro');

            // Atualiza a classe ativa nos filtros
            filtros.forEach(btn => btn.classList.remove('active'));
            filtro.classList.add('active');

            // Mostra ou esconde projetos
            projetos.forEach(projeto => {
                if (tipo === 'todos' || projeto.classList.contains(tipo)) {
                    projeto.style.display = 'block';
                } else {
                    projeto.style.display = 'none';
                }
            });
        });
    });
});

