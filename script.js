// elementos

const botao_explicacao = document.querySelector(".btn-explicacao");
const botao_tabela = document.querySelector(".btn-tabela");
const botao_tabela2 = document.querySelector(".btn-tabela2");
const botao_detalhes = document.querySelector(".btn-detalhes")

const tabela = document.querySelector(".container-tabela-resultado");
const historia_explicacao = document.querySelector(".container-historia-explicacao");
const esquema_detalhes = document.querySelector(".container-esquema-detalhes");

botao_explicacao.addEventListener("click", view_transition);
botao_tabela.addEventListener("click", view_transition);
botao_detalhes.addEventListener("click", view_transition2);
botao_tabela2.addEventListener("click", view_transition2);

function view_transition() {

    document.startViewTransition(() => alterna_historia_tabela());

}

function alterna_historia_tabela() {

    tabela.classList.toggle("invisivel");
    historia_explicacao.classList.toggle("invisivel");

}

function view_transition2() {

    document.startViewTransition(() => alterna_tabela_detalhes());

}

function alterna_tabela_detalhes() {

    if (esquema_detalhes.classList.contains("invisivel")) {
        animate(0);
    }
    tabela.classList.toggle("invisivel");
    esquema_detalhes.classList.toggle("invisivel");


}
