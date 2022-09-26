const express = require('express');
const routes = require('./routes');
const app = express();
const port = 3000;
//const firebaseToken = require('./config/todolist-21d89-a85796fdae6f.json');

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})