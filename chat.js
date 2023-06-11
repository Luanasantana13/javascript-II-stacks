/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }

// Arquivo chat.js

// Array para armazenar as mensagens


var listaMensagens = [];

// Função para adicionar uma mensagem ao array
function adicionarMensagem(apelido, mensagem) {
    listaMensagens.push({
        "apelido": apelido,
        "mensagem": mensagem
    });
}

// Função para formatar as mensagens em HTML
function formatarMensagens() {
    var html = "";
    for (var i = 0; i < listaMensagens.length; i++) {
        var mensagem = listaMensagens[i];
        html += '<div class="chat-message">';
        html += '<span class="chat-message-apelido">' + mensagem.apelido + '</span>';
        html += '<span class="chat-message-item">' + mensagem.mensagem + '</span>';
        html += '</div>';
    }
    return html;
}

// Função para atualizar o conteúdo da div com as mensagens formatadas
function atualizarHTML() {
    var chatMessagesDiv = document.getElementById('chat-messages');
    chatMessagesDiv.innerHTML = formatarMensagens();
}

// Função para lidar com o clique no botão de adicionar mensagem


// Adiciona o evento de clique ao botão de adicionar mensagem
function commitMessageClickHandler(){
    let mensagem_input = document.getElementById("message-input")
  
    if(mensagem_input.value.trim().length == 0){
      mensagem_input.focus()
      return
    }
  
    adicionarMensagem("stackx", mensagem_input.value)
    atualizarHTML()
    document.getElementById("message-input").value = ``
  }

  
// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};

// --------------------------------