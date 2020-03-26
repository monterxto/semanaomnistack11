const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informção no back-end
 */

 /**
  * Tipos de parâmetro:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, páginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Tipos principais de bancos de dados
   * SQL...
   * NoSQL...
   */

   /**
    * Para se comunicar com o banco tem que:
    * Instalar o driver;
    * Query builder;
    */