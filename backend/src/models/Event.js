const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    category: String,
    place: String,
    thumbnail: String,
    date: Date,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      // Define options for how the model should be serialized to JSON
      virtuals: true, // Include virtual properties in the serialized output
    },
  }
);

EventSchema.virtual("thumbnail_url").get(function () {
  // Define a virtual property for "thumbnail_url"
  return `http://localhost:8000/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Event", EventSchema);
