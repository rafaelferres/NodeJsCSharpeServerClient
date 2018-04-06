var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

// Criar uma instância do servidor e encadear a função de escuta para ela
// A função passada para net.createServer () se torna o manipulador de eventos para o evento 'connection'
// O objeto sock a função de retorno de chamada recebe UNIQUE para cada conexão
net.createServer(function(sock) {
    
    // Nós temos uma conexão - um objeto de soquete é atribuído à conexão automaticamente
    console.log('CONECTADO: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    // Adicione um manipulador de eventos 'data' a essa instância do socket
    sock.on('data', function(data) {
        
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Escreva os dados de volta ao soquete, o cliente receberá como dados do servidor
        sock.write('Você escreveu :"' + data + '"');
        
    });
    
    // Adicione um manipulador de eventos 'close' a essa instância do soquete
    sock.on('close', function(data) {
        console.log('CONEXÃO FECHADA: ' + sock.remoteAddress +' '+ sock.remotePort);
    });
    
}).listen(PORT, HOST);

console.log('Server rodando em ' + HOST +':'+ PORT);