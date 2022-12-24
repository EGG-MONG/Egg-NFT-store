const mongoose = require("mongoose");
const transferSchema = new mongoose.Schema(
  {
    tokenId : Number,
    state: String,
    price: Number,
    from: String,
    to: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Transfer", transferSchema);
