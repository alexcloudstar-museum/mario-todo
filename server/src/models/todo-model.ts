import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  job: { type: String, required: true },
});

const TodoModel = mongoose.model('Todo', todoSchema);

export default TodoModel;
