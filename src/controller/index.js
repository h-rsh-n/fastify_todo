async function getAll(req,res){
  const {todoService} = this;
  const response = await todoService.getAll();
  return res.status(200).send({response});
}

async function create(req,res){
  const {todoService} = this;
  const response = await this.todoService.create(req.body.todoText);
  return res.status(201).send({response})
}

async function getOne(req,res){
  const {todoService} = this;
  const response = await this.todoService.getOne(req.params.id);
  return res.status(200).send({response});
}

async function deleteAll(req,res){
  const {todoService} = this;
  const {db} = this;
  const response = await this.todoService.deleteAll();
  return res.status(200).send(this.db.todos)
}

async function deleteOne(req,res){
  const {todoService} = this;
  const {db} = this;
  const response = await this.todoService.deleteOne(req.params.id);
  return res.status(200).send(this.db.todos,{response});
}
module.exports = {
  getAll,
  getOne,
  create,
  deleteAll,
  deleteOne
}