// elementos

const botao_ajuda = document.querySelector(".btn-explicacao");
const tabela = document.querySelector(".container-tabela-resultado");
const historia_explicacao = document.querySelector(".container-historia-explicacao");


botao_ajuda.addEventListener("click", e => {

    document.startViewTransition(() => mostra_historia());

})

function mostra_historia() {

    tabela.classList.add("invisivel");
    historia_explicacao.classList.remove("invisivel");

}

