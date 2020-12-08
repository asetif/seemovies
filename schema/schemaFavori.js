const mongoose = require("mongoose");


const favorisSchema = mongoose.Schema(
  {
    nameMovies: {
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


module.exports = mongoose.model("FavorisModel", favorisSchema);