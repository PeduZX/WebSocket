// CRIAR O SOCKET E EMITIR PARA O BACKEND

import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
socket.emit('selecionar_documento', nome, (texto) => {
    atualizaTextoEditor(texto); // atualiza o editor de texto com o texto do documento que o servidor enviou como resposta
}); // informa ao servidor que o usuário entrou no documento, enviando o nome do documento para o servidor
}

function emiteTextoEditor(dados) {
    socket.emit('texto_editor', dados); // envia o texto do editor para o servidor, junto com o nome do documento para que o servidor saiba para qual sala enviar as atualizações do texto
}

// socket.on('texto_doumento', (texto) => { // recebe o texto do documento do servidor e atualiza o editor de texto
//     atualizaTextoEditor(texto); // o front faz o log do texto do documento que recebeu do servidor
// });

socket.on('texto_editor_clientes', (texto) => { // recebe o texto do servidor e atualiza o editor de texto
    atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome){
    socket.emit('excluir_documento', nome);
}

socket.on('excluir_documento_sucesso', (nome) => {
    alertarERedirecionar(nome);
})


export { emiteTextoEditor, selecionarDocumento, emitirExcluirDocumento };