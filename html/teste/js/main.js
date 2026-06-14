import { iniciarTema } from './tema.js';
import { desafios } from './desafios.js';

document.addEventListener('DOMContentLoaded', () => {
    iniciarTema();
    const gradeTestes = document.querySelector('.grade-testes');
    
    if (gradeTestes) {
        for (let i = 1; i <= 52; i++) {
            const desafioCadastrado = desafios.find(d => d.numero === i);
            const itemTeste = document.createElement('div');
            itemTeste.classList.add('item-teste');
            
            if (desafioCadastrado) {
                itemTeste.classList.add('ativo');
                itemTeste.innerHTML = `
                    <div class="circulo-teste">
                        <i class="fas ${desafioCadastrado.icone}"></i>
                    </div>
                    <span class="label-teste">Desafio ${String(i).padStart(2, '0')}</span>
                    
                    <div class="pokemon-card">
                        <div class="card-moldura">
                            <div class="card-info">
                                <span class="card-numero">#${String(i).padStart(2, '0')}</span>
                                <h3 class="card-titulo">${desafioCadastrado.nome}</h3>
                                <p class="card-descricao">${desafioCadastrado.descricao}</p>
                                <div class="card-tags">
                                    ${desafioCadastrado.tecnologias.map(t => `<span class="tag">${t}</span>`).join('')}
                                </div>
                                <a href="${desafioCadastrado.github}" target="_blank" class="btn-card-github">
                                    <i class="fab fa-github"></i> Ver Código
                                </a>
                            </div>
                        </div>
                    </div>
                `;

                itemTeste.addEventListener('click', (evento) => {
                    evento.stopPropagation(); 

                    if (itemTeste.classList.contains('fixado')) {
                        itemTeste.classList.remove('fixado');
                    } else {
                        document.querySelectorAll('.item-teste.fixado').forEach(item => {
                            item.classList.remove('fixado');
                        });
                        // Trava o card atual
                        itemTeste.classList.add('fixado');
                    }
                });

            } else {
                itemTeste.classList.add('inativo');
                itemTeste.innerHTML = `
                    <div class="circulo-teste">
                        <i class="fas fa-lock"></i>
                    </div>
                    <span class="label-teste">Desafio ${String(i).padStart(2, '0')}</span>
                `;
            }
            gradeTestes.appendChild(itemTeste);
        }
    }

    document.addEventListener('click', () => {
        document.querySelectorAll('.item-teste.fixado').forEach(item => {
            item.classList.remove('fixado');
        });
    });
});