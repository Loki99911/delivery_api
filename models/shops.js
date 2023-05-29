const { Schema, model } = require('mongoose');

const shopsSchema = Schema(
  {
    restaurantName: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      itemId: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
    },
  },

  { timestamps: true, versionKey: false }
);

const Shops = model('Shops', shopsSchema);

module.exports = { Shops };
