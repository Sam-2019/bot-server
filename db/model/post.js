const mongoose = require("mongoose");
const { dataSchema } = require("../schema");

module.exports = mongoose.model("Posts", dataSchema);