const fs = require("fs")

module.exports = {
	post: async (settings) => {
		if (!settings.clientid) return console.log('clientid NOT DEFINED!')
		fs.readdir(`${__dirname}/post`, (err, files) => {
			if (err) console.log(err);
			else files.forEach(list => require(`./post/${list}`)(settings))
		})
	}
};
