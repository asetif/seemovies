const mongoose = require("mongoose");


const favoriSchema = mongoose.Schema(
  {

    name: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    },
    user_id: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: "created_at" } }
);


module.exports = mongoose.model("favoris", favoriSchema);