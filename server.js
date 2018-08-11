const express = require('express');
const mongo = require('mongodb');

async function main() {
	const app = express();
	try{
		const clienteDoBanco = 
			await mongo.connect('mongodb://ronaldinho:nerdzao1@ds213832.mlab.com:13832/nerdzao-rick-and-morty', {
					useNewUrlParser: true,
			});
		
		
		const bancoDeDados = clienteDoBanco.db('nerdzao-rick-and-morty');
		const personagens = await bancoDeDados.collection('characters');

		// Vai permitir que nossa aplicação escute o pedido
		// de personagens
		app.get('/personagens', async (requisicao, resposta) => {
				const todosOsPersonagens = await personagens.find().toArray();
				resposta.send(todosOsPersonagens);
		});
		
		app.listen(3000, () => console.log('Escutando na porta 3000'));
	} catch(e) {
		console.log(e);
	}

	
}

main();