const express = require('express');

async function main() {
	const app = express();
	app.get('/', (req, res) => {
		res.send('GET /personagens');
	});

	app.get('/personagens', (req, res) => {
		res.send('oi');
	});

	app.listen(3000, () => console.log('Escutando na porta 3000'));
}

main();