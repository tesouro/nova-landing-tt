// elementos

const botao_ajuda = document.querySelector(".btn-explicacao");
const botao_tabela = document.querySelector(".btn-tabela");
const tabela = document.querySelector(".container-tabela-resultado");
const historia_explicacao = document.querySelector(".container-historia-explicacao");


botao_ajuda.addEventListener("click", view_transition);
botao_tabela.addEventListener("click", view_transition);

function view_transition() {

    document.startViewTransition(() => alterna_historia_tabela());

}

function alterna_historia_tabela() {

    tabela.classList.toggle("invisivel");
    historia_explicacao.classList.toggle("invisivel");

}

