import mongoose, { Schema, Document } from 'mongoose';

export interface IGame extends Document {
  name: string;
  console_id: string;
}

const Game: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    console_id: {
      type: Schema.Types.ObjectId,
      ref: 'Console',
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IGame>('Game', Game);
