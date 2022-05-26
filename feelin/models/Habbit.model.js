const { Schema, model } = require("mongoose");

const habbitSchema = new Schema({
  name: { type: String },
  icon: { type: String },
  frequency: { type: string, enum: ["daily", "weekly", "monthly"] },
  habitCounter: { type: Number },
});

const Habbit = model("Habbit", habbitSchema);

module.exports = Habbit;
