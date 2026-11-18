//Export main schema
import mongoose from "mongoose";
import { INTERVALS } from "../constants/intervals.js";

//define schema
const Schema = mongoose.Schema
const listSchema = new Schema(
  {
    content: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    deleted: Boolean,
    dateDeleted: Boolean,
    recurrance: {
      count: { type: Number, min: 1, default: 1 },
      unit: {
        type: Number,
        enum: Object.values(INTERVALS).map((i) => i.value),
        default: INTERVALS.DAILY.value,
      },
    },
  },
  { timestamps: true },
);

export const Todo = mongoose.model("Todo", listSchema);