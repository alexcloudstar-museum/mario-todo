import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface TodoDoc extends mongoose.Document {
  todo: { type: String; required: true };
}

const todoSchema = new Schema({
  todo: { type: String, required: true },
});

const TodoModel = mongoose.model<TodoDoc>('Todo', todoSchema);

export default TodoModel;
