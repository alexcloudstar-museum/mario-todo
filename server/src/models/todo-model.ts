import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface TodoDoc extends mongoose.Document {
  job: {
    type: String;
    required: true;
  };
  creator: {
    type: String;
    ref: 'User';
    required: true;
  };
}

const todoSchema = new Schema({
  job: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    ref: 'User',
    required: true,
  },
});

const TodoModel = mongoose.model<TodoDoc>('Todo', todoSchema);

export default TodoModel;
