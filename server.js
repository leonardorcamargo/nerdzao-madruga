const express = require('express');
const mongo = require('mongodb');

async function main() {
	const app = express();
	try{
		// const connection = await mongo.connect(
		// 	'mongodb://ronaldinho:nerdzao1@ds213832.mlab.com:13832/'
		// );
		// const db = connection.db('nerdzao-rick-and-morty');
		// const characters = db.collection('characteres');
		const personagens = [
			{
				nome: "Rick Sanchez",
				dimension: "C-137",
			},
			{
				nome: "Morty Smith",
				dimension: "C-137",
			}
		];

		app.get('/', (req, res) => {
			res.send('GET /personagens');
		});
		app.get('/personagens', async (req, res) => {
			res.send(personagens);
		});
		app.listen(3000, () => console.log('Escutando na porta 3000'));
	} catch(e) {
		console.log(e);
	}

	
}

main();