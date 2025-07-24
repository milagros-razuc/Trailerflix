const express = require('express');
const path = require('path');
require('dotenv').config({ path: __dirname + '/../.env' });
const routes = require('./routes/index');

const app = express();
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
