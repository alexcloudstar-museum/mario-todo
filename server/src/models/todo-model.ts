import mongoose, { Mongoose } from 'mongoose';

const Schema = mongoose.Schema;

interface TodoDoc extends mongoose.Document {
  job: { type: String; required: true };
  _id: mongoose.Schema.Types.ObjectId;
}

const todoSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    job: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TodoModel = mongoose.model<TodoDoc>('Todo', todoSchema);

export default TodoModel;
