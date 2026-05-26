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
                    <a href="./${desafioCadastrado.numero}-${desafioCadastrado.nome}/index.html">
                        <div class="circulo-teste">
                            <i class="fas ${desafioCadastrado.icone}"></i>
                        </div>
                        <span class="label-teste">Desafio ${String(i).padStart(2, '0')}</span>
                    </a>
                `;
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
});