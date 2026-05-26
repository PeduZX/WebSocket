import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

import './dbConnect.js';

const app = express();
const porta = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioAtual = path.dirname(caminhoAtual);

const diretorioPublico = path.join(diretorioAtual, '../public');

app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

const io = new Server(servidorHttp);



servidorHttp.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});


export default io;