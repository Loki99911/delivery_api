const { Schema, model } = require('mongoose');

// const historySchema = Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     adress: {
//       type: String,
//       required: true,
//     },
//     totalValue: {
//       type: String,
//       required: true,
//     },
//     meals: {
//       type: Array,
//       required: true,
//       name: {
//         type: String,
//         required: true,
//       },
//       price: {
//         type: String,
//         required: true,
//       },
//       itemId: {
//         type: String,
//         required: true,
//       },
//       quantity: {
//         type: String,
//         required: true,
//       },
//       photo: {
//         type: String,
//         required: true,
//       },
//     },
//   },

//   { timestamps: true, versionKey: false }
// );

const mealSchema = Schema({
  itemId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const historySchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    totalValue: {
      type: String,
      required: true,
    },
    meals: {
      type: [mealSchema],
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);


const History = model('History', historySchema);

module.exports = { History };
