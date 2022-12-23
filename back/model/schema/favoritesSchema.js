const mongoose = require("mongoose");
const favoritesSchema = new mongoose.Schema(
  {
    wallet : {type : String, index : true, unique : true},
    favorites : [Number]
  },
  { timestamps: true }
);
module.exports = mongoose.model("Favorites", favoritesSchema);
