import { LeanDocument } from 'mongoose';
import IUser from '../models/User';
import UserSchema from '../db/models/user.schema';

export default class UserService {
  static async getByEmail(email: string): Promise<LeanDocument<IUser> | null> {
    return await UserSchema.findOne({ 'contact.email': email }).lean().exec();
  }
}
