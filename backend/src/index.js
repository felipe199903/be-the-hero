const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * GET: Buscar uma informação no back-end
  * POST: Recuperar uma informação no back-end
  * PUT: Modificar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   *    exemplo: /users?name=Diego
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, tulizado para criar ou alterar recursos.
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server.
    * NoSQL: MongoDB, CouchDB, etc.
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */

app.listen(3333);