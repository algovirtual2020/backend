import mongosee, { Schema, model } from 'mongoose';
export interface Score extends mongosee.Document{
  user:Schema.Types.ObjectId,
  date: Date,
  scoreList: Array<number>;
};

const ScoreSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref:'User',
    required:[true, 'El campo user es necesario']
  },
  date: {
    type: Date,
    default: new Date()
  },
  scoreList: {
    type: Array<number>(),
    default: [1,2,3,4],
    required:[true, 'El campo score es necesario']
  }
});



export default model<Score>('Score', ScoreSchema);