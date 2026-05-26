// AQUI SOMENTE CÓDIGOS QUE INTERAGEM COM O HTML NO CASO DOCUMENTO.HTML
import { emiteTextoEditor, emitirExcluirDocumento, selecionarDocumento } from "./socketFrontDocumento.js";

const parametros = new URLSearchParams(window.location.search); // pega os parâmetros da URL para identificar o documento
const nomeDocumento = parametros.get('nome'); // pega o nome do documento a partir dos parâmetros da URL

const textoEditor = document.getElementById('editor-texto'); // pega o editor de texto no HTML para poder manipular o conteúdo dele
const tituloDocumento = document.getElementById('titulo-documento'); // pega o elemento do título do documento no HTML para poder atualizar o nome do documento
const botaoExcluir = document.getElementById('excluir-documento')

tituloDocumento.textContent = nomeDocumento ||'Documento sem título';
selecionarDocumento(nomeDocumento); // chama a função para informar ao servidor que o usuário entrou no documento, enviando o nome do documento para o servidor


textoEditor.addEventListener('keyup', () => { // toda vez que o usuário soltar uma tecla, o evento é disparado e o texto do editor é enviado para o servidor
    emiteTextoEditor({
        texto:textoEditor.value, 
        nomeDocumento
    }); // chama a função para enviar o texto do editor para o servidor, junto com o nome do documento para que o servidor saiba para qual sala enviar as atualizações do texto
});

function atualizaTextoEditor(texto) { // função para atualizar o conteúdo do editor de texto
    textoEditor.value = texto;
}

botaoExcluir.addEventListener('click', () => {
    emitirExcluirDocumento(nomeDocumento);
});

function alertarERedirecionar(nome){
    if(nome === nomeDocumento){
        alert(`Documento ${nome} excluído com sucesso!`);
        window.location.href = '/';
    }
}

export { atualizaTextoEditor, alertarERedirecionar };