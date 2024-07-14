const fs = require('fastify-plugin');

async function db(fastify,options){
  fastify.decorate('db',{
    todos:[]
  })
}

module.exports = fs(db);