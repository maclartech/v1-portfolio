const alternadorTema = document.getElementById('alternador-tema');
const elementoHtml = document.documentElement;

function aplicarTema(tema) {
    elementoHtml.setAttribute('data-theme', tema);
    if (alternadorTema) {
        alternadorTema.innerHTML =
            tema === 'escuro'
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';
    }
}

const preferenciaSistemaEscuro =
    window.matchMedia('(prefers-color-scheme: dark)');
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) {
    aplicarTema(temaSalvo);
} else {
    aplicarTema(
        preferenciaSistemaEscuro.matches
            ? 'escuro'
            : 'claro'
    );
}

if (alternadorTema) {
    alternadorTema.addEventListener('click', () => {
        const ehEscuro =
            elementoHtml.getAttribute('data-theme') === 'escuro';
        const novoTema =
            ehEscuro ? 'claro' : 'escuro';
        aplicarTema(novoTema);
        localStorage.setItem('tema', novoTema);
    });
}

preferenciaSistemaEscuro.addEventListener('change', (evento) => {
    if (!localStorage.getItem('tema')) {
        aplicarTema(
            evento.matches
                ? 'escuro'
                : 'claro'
        );
    }
});