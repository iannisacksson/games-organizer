import mongoose, { Schema, Document } from 'mongoose';

export interface IConsole extends Document {
  name: string;
  company: string;
}

const Console: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IConsole>('Console', Console);
