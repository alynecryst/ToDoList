//const firestore = require('./config/firebaseconfig.js');
const express = require('express');
const routes = express.Router();
const listaController = require('./Controllers/listaController.js')
const itemController = require('./Controllers/itemController.js');
//const app = express();

/*CRUD LISTA */
// app.post('/lista', async(req, res) => {
//     const body = req.body;

//     if (body.descricao) {
//         const aux = {
//             descricao: body.descricao,
//             delete: false
//         }

//         await firestore.collection("lista").add(aux);
//         res.status(201).json({ mensagem: 'Lista criada com sucesso!' });
//     } else {
//         res.status(400).json({ mesagem: "Dados inválidos! Por favor informar a DESCRIÇÃO da lista" })
//     }
// })

//app.use(express.json());

//criar lista
routes.post('/list', listaController.post);

//buscar listas
routes.get('/list', listaController.get);

//alterar dados da lista
routes.put('/list', listaController.put);

//deletar lista
routes.delete('/list/:id', listaController.delete);

/*CRUD dos itens da lista*/

//criar item
routes.post('/item', itemController.post);

//buscar item
routes.get('/item/:id', itemController.get);

//atualizar o item
routes.put('/item', itemController.put);

//deletar o item
routes.delete('/item/:id', itemController.delete);

module.exports = routes;