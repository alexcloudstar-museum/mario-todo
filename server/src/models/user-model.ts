import mongoose, { ObjectId } from 'mongoose';

const Schema = mongoose.Schema;

interface UserDoc extends mongoose.Document {
  userId: { type: String; required: true };
  todos: [
    {
      type: String;
      required: true;
      Ref: 'Todo';
    }
  ];
}

const userSchema = new Schema({
  userId: { type: String, required: true },
  todos: [
    {
      type: String,
      required: true,
      ref: 'Todo',
    },
  ],
});

const UserModel = mongoose.model<UserDoc>('User', userSchema);

export default UserModel;
