const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("Hello, World");
});

const PORT = process.env.PORT || 3008

var server = app.listen(PORT, () => {
	console.log("listening on:", server.address().port);
});
