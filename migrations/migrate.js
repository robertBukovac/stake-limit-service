const fs = require('fs');
const minimist = require('minimist');

const loadQuery = require('../src/utils/load-query.js');
const psql = require('../src/config/db.js');

const listFiles = async () => {
	return new Promise(res => {
		fs.readdir(__dirname + '/queries', (err, files) => {
			if (err) throw err;
			res(files);
		});
	});
};

const executeQuery = async query => {
	return new Promise(res => {
		console.log(query)
		psql.query(query, err => {
			if (err) throw err;
			res(query);
		});
	});
};

const migrate = async () => {
	const args = minimist(process.argv.slice(2));
	const filePath = file => `${__dirname}/queries/${file}`;

	try {
		if (!args.f) {
			const files = await listFiles();
			for (const file of files) {
				await executeQuery(await loadQuery(filePath(file)));
				console.log(`Migration from file ${file} executed.`);
			}
		} else {
			await executeQuery(args.f);
		}
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

migrate();
