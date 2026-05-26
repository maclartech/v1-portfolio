export function iniciarTema() {

    const alternadorTema = document.getElementById('alternador-tema');
    const elementoHtml = document.documentElement;
    function aplicarAtmosfera(atmosfera) {
        elementoHtml.setAttribute('data-theme', atmosfera);
        if (alternadorTema) {
            if (atmosfera === 'quente') {
                alternadorTema.innerHTML =
                    '<i class="fas fa-fire" style="color: #ff479d;"></i>';
            } else {
                alternadorTema.innerHTML =
                    '<i class="fas fa-snowflake" style="color: #0dcaf0;"></i>';
            }
        }
    }

    const preferenciaSistemaEscuro =
        window.matchMedia('(prefers-color-scheme: dark)');
    const atmosferaSalva =
        localStorage.getItem('atmosfera-labs');
    if (atmosferaSalva) {
        aplicarAtmosfera(atmosferaSalva);
    } else {
        const atmosferaInicial =
            preferenciaSistemaEscuro.matches
                ? 'quente'
                : 'frio';
        aplicarAtmosfera(atmosferaInicial);
    }

    if (alternadorTema) {
        alternadorTema.addEventListener('click', () => {
            const ehFrio =
                elementoHtml.getAttribute('data-theme') === 'frio';
            const novaAtmosfera =
                ehFrio ? 'quente' : 'frio';
            aplicarAtmosfera(novaAtmosfera);
            localStorage.setItem(
                'atmosfera-labs',
                novaAtmosfera
            );
        });
    }

    preferenciaSistemaEscuro.addEventListener('change', (evento) => {
        if (!localStorage.getItem('atmosfera-labs')) {
            aplicarAtmosfera(
                evento.matches ? 'quente' : 'frio'
            );
        }
    });
}