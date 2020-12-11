const mongoose = require("mongoose");

/**
 * Data model for favorites movies for user.
 * @type {*}
 */
const favorisSchema = mongoose.Schema(
  {
    id:{
      type: String,
      require: true
    },
    nameMovies: {
      type: String,
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