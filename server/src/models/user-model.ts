import mongoose, { ObjectId } from 'mongoose';

const Schema = mongoose.Schema;

interface UserDoc extends mongoose.Document {
  userId: { type: String; required: true };
  todos: [
    {
      type: ObjectId;

      Ref: 'Todo';
    }
  ];
}

const userSchema = new Schema({
  userId: { type: String, required: true },
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ],
});

const UserModel = mongoose.model<UserDoc>('User', userSchema);

export default UserModel;
