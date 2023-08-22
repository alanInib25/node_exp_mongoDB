import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name:{
      type: String
    },
    password:{
      type: String
    },
    age:{
      type: Number
    },
    email:{
      type: String,
      unique: true
    },
    rol:{
      type: ["user", "admin"],
      default: "user"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default model('Users', userSchema);