import { Document } from 'mongoose';
import Role from './Role';

interface IContact {
  email: string;
  phone: string;
}

export default interface IUser extends Document {
  firstName: string;
  lastName: string;
  contact: IContact;
  active: boolean;
  role: Role;
}
