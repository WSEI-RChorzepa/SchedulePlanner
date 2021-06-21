import mongoose, { Schema } from 'mongoose';
import IUser from '../../models/User';
import Role from '../../models/Role';

const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contact: {
      email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
      phone: { type: String, required: true },
    },
    active: { type: Boolean, default: true },
    role: { type: Number, enum: Object.values(Role), default: Role.Uninitialized },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IUser>('user', UserSchema);
