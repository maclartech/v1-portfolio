const alternadorTema = document.getElementById('alternador-tema');
const elementoHtml = document.documentElement;
function aplicarTema(tema) {
    elementoHtml.setAttribute('data-theme', tema);
    if (alternadorTema) {
        alternadorTema.innerHTML = tema === 'escuro' ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    }
}

const preferenciaSistemaEscuro = window.matchMedia('(prefers-color-scheme: dark)');
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) {
    aplicarTema(temaSalvo);
} else {
    aplicarTema(preferenciaSistemaEscuro.matches ? 'escuro' : 'claro');
}
if (alternadorTema) {
    alternadorTema.addEventListener('click', () => {
        const ehEscuro = elementoHtml.getAttribute('data-theme') === 'escuro';
        const novoTema = ehEscuro ? 'claro' : 'escuro';
        aplicarTema(novoTema);
        localStorage.setItem('tema', novoTema);
    });
}
preferenciaSistemaEscuro.addEventListener('change', (evento) => {
    if (!localStorage.getItem('tema')) {
        aplicarTema(evento.matches ? 'escuro' : 'claro');
    }
});

const listaDeCertificados = [
    {
        id: "cert-001",
        titulo: "Introdução à Lógica de Programação de Computadores",
        emissor: "Udemy",
        data: "8 de Ago. de 2024 | 7 de Dez. de 2024",
        descricao: "Curso prático de introdução à programação utilizando a linguagem Python, focado no desenvolvimento de raciocínio lógico, algoritmos e conceitos fundamentais de ciência da computação. Ministrado pelo instrutor Diego Mariano (Ph.D. pela UFMG).",
        imagem: "assets/001.jpg"
    },
    {
        id: "cert-002",
        titulo: "Algoritmos e Lógica de Programação",
        emissor: "Udemy",
        data: "8 de Ago. de 2024 | 7 de Dez. de 2024",
        descricao: "Curso completo de fundamentos de programação focado no desenvolvimento de algoritmos estruturados, testes de mesa e depuração. Domínio prático de estruturas condicionais, repetitivas, vetores e matrizes utilizando VisualG, com implementação de lógica em múltiplas linguagens de mercado, incluindo C, C++, Python, C# e Java.",
        imagem: "assets/002.jpg"
    },
    {
        id: "cert-003",
        titulo: "The Complete Full-Stack Web Development Bootcamp",
        emissor: "Udemy",
        data: "2 de Dez. de 2024 | 15 de Fev. 2026",
        descricao: "Bootcamp intensivo de desenvolvimento web Full-Stack com mais de 62 horas de duração, ministrado pela instrutora Dra. Angela Yu (App Brewery, Londres). Domínio completo de tecnologias modernas de Front-end (HTML5, CSS3, JavaScript ES6, React.js, Bootstrap 5) e Back-end (Node.js, Express.js, APIs RESTful, bancos de dados SQL/PostgreSQL), além de controle de versão com Git/GitHub e implantação de aplicações.",
        imagem: "assets/003.jpg"
    },
    {
        id: "cert-004",
        titulo: "Fundamentos de TI: Hardware e Software",
        emissor: "Fundação Bradesco",
        data: "18 de Maio de 2026 | 19 de Maio de 2026",
        descricao: " Entender a base de como o hardware se comunica com o software é essencial para construir soluções melhores e mais eficientes na área de desenvolvimento.",
        imagem: "assets/004.jpg"
    },
    {
        id: "cert-005",
        titulo: "Lei Geral de Proteção de Dados (LGPD)",
        emissor: "Fundação Bradesco",
        data: "19 de Maio de 2026 | 20 de Maio de 2026",
        descricao: "Curso autoinstrucional sobre os fundamentos, pilares e aplicações práticas da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), focado nos direitos dos titulares, tratamento de dados pessoais e boas práticas de segurança da informação no desenvolvimento e gestão de sistemas.",
        imagem: "assets/005.jpg"
    },
    {
        id: "cert-006",
        titulo: "Segurança em Tecnologia da Informação",
        emissor: "Fundação Bradesco",
        data: "20 de Maio de 2026 | 21 de Maio de 2026",
        descricao: "Curso de 12 horas focado nos princípios fundamentais da Segurança da Informação. Aprendizagem prática sobre a classificação e a natureza das ações de segurança (preventivas, detectivas e corretivas), proteção de ambientes computacionais, mitigação de vulnerabilidades e boas práticas para garantir a integridade, confidencialidade e disponibilidade dos dados.",
        imagem: "assets/006.jpg"
    },
    {
        id: "cert-007",
        titulo: "Python",
        emissor: "Santander Open Academy",
        data: "5 de Maio de 2026 | 21 de Maio de 2026",
        descricao: "Curso de 8 horas abrangendo os conceitos essenciais e fundamentos da linguagem Python. Desenvolvimento de competências em estruturas de dados, controle de fluxo e lógica aplicada, validados por módulos práticos e autoavaliação da plataforma Santander Open Academy.",
        imagem: "assets/007.jpg"
    },
    {
    id: "cert-008",
    titulo: "Administrando Banco de Dados",
    emissor: "Fundação Bradesco",
    data: "20 de Maio de 2026 | 22 de Maio de 2026",
    descricao: "Curso de 15 horas focado nos conceitos fundamentais de gerenciamento e administração de bancos de dados. Compreensão prática sobre a estrutura de tabelas, integridade de dados, consultas, segurança e manutenção de ambientes de armazenamento de informações, essenciais para o desenvolvimento de sistemas robustos.",
    imagem: "assets/008.jpg"
    }
];

const containerLista = document.getElementById('lista-certificados');
const imgPrincipal = document.getElementById('imagem-certificado');
const tituloPrincipal = document.getElementById('titulo-certificado');
const descPrincipal = document.getElementById('descricao-certificado');
const emissorPrincipal = document.getElementById('emissor-certificado');
const dataPrincipal = document.getElementById('data-certificado');
const painelMetadados = document.getElementById('metadados-certificado');

function atualizarVisualizador(certificado) {
    tituloPrincipal.innerText = certificado.titulo;
    descPrincipal.innerText = certificado.descricao;
    emissorPrincipal.innerText = certificado.emissor;
    dataPrincipal.innerText = certificado.data;
    imgPrincipal.src = certificado.imagem;
    imgPrincipal.alt = `Certificado de conclusão em ${certificado.titulo}`;
    painelMetadados.style.display = 'block';
    imgPrincipal.style.display = 'block';
}

listaDeCertificados.forEach((certificado, indice) => {
    const itemLista = document.createElement('li');
    itemLista.innerHTML = `<i class="fas fa-file-signature"></i> ${certificado.titulo}`;
    if (indice === 0) {
        itemLista.classList.add('active');
        atualizarVisualizador(certificado);
    }
    itemLista.addEventListener('click', () => {
        document.querySelectorAll('.lista-certificados li').forEach(li => li.classList.remove('ativo'));
        itemLista.classList.add('ativo');
        atualizarVisualizador(certificado);
    });
    containerLista.appendChild(itemLista);
});