"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
    Profissao[Profissao["Escritor"] = 2] = "Escritor";
    Profissao[Profissao["Ator"] = 3] = "Ator";
    Profissao[Profissao["Nutricionista"] = 4] = "Nutricionista";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
