const containerLista =
    document.getElementById('lista-certificados');
const imgPrincipal =
    document.getElementById('imagem-certificado');
const tituloPrincipal =
    document.getElementById('titulo-certificado');
const descPrincipal =
    document.getElementById('descricao-certificado');
const emissorPrincipal =
    document.getElementById('emissor-certificado');
const dataPrincipal =
    document.getElementById('data-certificado');
const painelMetadados =
    document.getElementById('metadados-certificado');

function atualizarVisualizador(certificado) {
    tituloPrincipal.innerText =
        certificado.titulo;
    descPrincipal.innerText =
        certificado.descricao;
    emissorPrincipal.innerText =
        certificado.emissor;
    dataPrincipal.innerText =
        certificado.data;
    imgPrincipal.src =
        certificado.imagem;
    imgPrincipal.alt =
        `Certificado de conclusão em ${certificado.titulo}`;
    painelMetadados.style.display =
        'block';
    imgPrincipal.style.display =
        'block';
}

listaDeCertificados.forEach((certificado, indice) => {
    const itemLista =
        document.createElement('li');
    itemLista.innerHTML =
        `<i class="fas fa-file-signature"></i> ${certificado.titulo}`;
    if (indice === 0) {
        itemLista.classList.add('ativo');
        atualizarVisualizador(certificado);
    }

    itemLista.addEventListener('click', () => {
        document
            .querySelectorAll('.lista-certificados li')
            .forEach(li => li.classList.remove('ativo'));
        itemLista.classList.add('ativo');
        atualizarVisualizador(certificado);
    });

    containerLista.appendChild(itemLista);
});