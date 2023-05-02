import mongoose from "mongoose";
import { statusEnum } from "../../config/enum.js";

export const testAppoinmentSchema = mongoose.Schema(
  {
    start_time: { type: String, trim: true, required: true },
    end_time: { type: String, trim: true, required: true },
    tests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tests",
        required: true,
      },
    ],
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    member_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    phlebotomist_id: { type: mongoose.Schema.Types.ObjectId },
    status: {
      type: String,
      required: true,
      enum: statusEnum,
      default: "PENDING",
    },
    date: { type: String, required: true },
  },
  { timestamps: true }
);
const testAppoinmentModel = mongoose.model(
  "test-appointment",
  testAppoinmentSchema
);

export default testAppoinmentModel;
