/* eslint-disable node/no-path-concat */
const express = require('express');

const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(`${__dirname}/storybook-static`));

// send the user to index html page inspite of the url
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, 'storybook-static/index.html'));
});

app.listen(port);
