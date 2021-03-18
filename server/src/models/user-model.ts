import mongoose, { ObjectId } from 'mongoose';

const Schema = mongoose.Schema;

interface UserDoc extends mongoose.Document {
  userId: { type: String; required: true };
  todos: [
    {
      _id: mongoose.Schema.Types.ObjectId;
      job: {
        type: String;
        required: true;
      };
    }
  ];
}

const userSchema = new Schema({
  userId: { type: String, required: true },
  todos: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      job: {
        type: String,
        required: true,
      },
    },
  ],
});

const UserModel = mongoose.model<UserDoc>('User', userSchema);

export default UserModel;
