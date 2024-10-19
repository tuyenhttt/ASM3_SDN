const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requires: [true, "Please enter students name"],
    },
    studentCode: {
      type: String,
      requires: [true, "Please enter studentCode "],
    },
    isActive: {
      type: Boolean,
      requires: true,
      default: true,
    },
  },
  {
    timestamps: true, // auto create_at, update_at
    versionKey: false, // __v = false
  }
);

const Student = mongoose.model("Product", StudentSchema);
module.exports = Student;
