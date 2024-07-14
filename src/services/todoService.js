const fp = require('fastify-plugin');

class TodoService{
  constructor(todoRepository){
    this.todoRepository = todoRepository
  }

  async getAll(){
    return await this.todoRepository.getAll();
  }

  async getOne(id){
    return this.todoRepository.getOne(id);
  }

  async deleteAll(){
    return this.todoRepository.deleteAll();
  }

  async deleteOne(id){
    return this.todoRepository.deleteOne(id);
  }

  async create(todoText){
    return this.todoRepository.create(todoText);
  }
}

async function todoService(fastify,options){
  const {todoRepository} = fastify;
  const service = new TodoService(todoRepository);
  fastify.decorate('todoService',service); 
}

module.exports = fp(todoService);