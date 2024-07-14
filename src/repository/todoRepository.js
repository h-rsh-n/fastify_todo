const fp = require('fastify-plugin');

class TodoRepository{
  constructor(db){
    this.db = db;
  }
  async getAll(){
    return this.db.todos;
  }

  async getOne(id){
  //console.log(id);
    return this.db.todos.find((todo)=>{
      return todo.id == id;
    })
  }

  async deleteAll(){
    return this.db.todos = [];
  }

  async deleteOne(id){
    const todos = this.db.todos;
    console.log(id)
    return this.db.todos = todos.filter((todo)=>{
      return todo.id!=id;
    })
  }

  async create(todoText){
    const todoList = this.db.todos;
    this.db.todos.push({
      text:todoText,
      id:todoList.length
    })
    return this.db.todos;
  }
}

async function todoRepository(fastify,options){
  const {db} = fastify;
  const repo = new TodoRepository(db);
  fastify.decorate('todoRepository',repo);
}

module.exports = fp(todoRepository);