// Importe as bibliotecas necessárias
const http = require('http');
const socketIO = require('socket.io');

// Crie o servidor HTTP
const server = http.createServer();
const io = socketIO(server);

// Classe para representar um jogador
class Jogador {
  constructor(id, parametro) {
    this.id = id;
    this.parametro = parametro;
  }
}

// Classe para representar uma sala de jogo
class Sala {
  constructor(id) {
    this.id = id;
    this.jogadores = [];
  }

  adicionarJogador(jogador) {
    this.jogadores.push(jogador);

    // Verificar se a sala está cheia com 2 jogadores
    if (this.jogadores.length === 2) {
      // Encontrar jogadores com parâmetros idênticos
      if (this.jogadores[0].parametro === this.jogadores[1].parametro) {
        io.to(this.id).emit('salaCheia', this.jogadores);
      } else {
        // Se os jogadores têm parâmetros diferentes, esvazie a sala
        this.jogadores = [];
        io.to(this.id).emit('salaNaoEmparelhada');
      }
    }
  }
}

// Classe para representar o sistema de matchmaking
class Matchmaking {
  constructor() {
    this.salas = [];
  }

  criarSala(id) {
    const sala = new Sala(id);
    io.to(id).emit('salaCriada', id);
    this.salas.push(sala);
  }

  adicionarJogador(jogador) {
    let salaEncontrada = false;

    // Procurar por salas com espaço
    for (const sala of this.salas) {
      if (sala.jogadores.length < 2) {
        sala.adicionarJogador(jogador);
        salaEncontrada = true;
        break;
      }
    }

    // Se não houver salas com espaço, criar uma nova sala
    if (!salaEncontrada) {
      const novaSalaId = this.salas.length + 1;
      this.criarSala(novaSalaId);
      this.salas[novaSalaId - 1].adicionarJogador(jogador);
    }
  }
}

// Crie uma instância do sistema de matchmaking
const matchmaking = new Matchmaking();

// Conecte-se ao evento de conexão do Socket.io
io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  // Escute o evento 'adicionarJogador' do cliente
  socket.on('adicionarJogador', (jogador) => {
    console.log('Jogador adicionado:', jogador);
    matchmaking.adicionarJogador(jogador);
  });

  // Escute o evento 'disconnect' do cliente
  socket.on('disconnect', () =>{})});
