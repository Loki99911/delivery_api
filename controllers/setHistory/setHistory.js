const { History } = require('../../models/history');

const setHistory = async (req, res, next) => {
  const { meals, ...rest } = req.body;
  try {
    const result = await History.create({ ...rest, meals: JSON.parse(meals) });

    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = setHistory;
