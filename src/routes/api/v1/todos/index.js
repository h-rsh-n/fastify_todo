const { getAll, create, getOne, deleteAll, deleteOne } = require("../../../../controller");

async function todoRouter(fastify,options){
  fastify.get('/',getAll);
  fastify.post('/',create);
  fastify.get('/:id',getOne);
  fastify.delete('/',deleteAll)
  fastify.delete('/:id',deleteOne)
}

module.exports = todoRouter;