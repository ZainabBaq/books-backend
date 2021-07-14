const { Cart, Order } = require("../db/models");

exports.checkout = async (req, res, next) => {
  const newOrder = await Order.create({ customerId: req.user.id });
  const cart = req.body.map((item) => ({
    ...item,
    orderId: newOrder.id,
    bookId: item.itemId,
  }));
  console.log(
    "🚀 ~ file: ordersController.js ~ line 9 ~ cart ~ newOrder",
    newOrder.toJSON()
  );
  await Cart.bulkCreate(cart);

  const finalOrder = {
    ...newOrder.toJSON(),
    items: req.body,
  };
  res.status(201).json(finalOrder);
};

// [
//   {
//   "bookId": 7,
//   "quantity" : 2,
//   "total": 12
// },
// {
//   "bookId": 8,
//   "quantity" : 2,
//   "total": 14
// }
// ]

// [
//   {
//   "orderId": 1,
//   "bookId": 7,
//   "quantity" : 2,
//   "total": 12
// },
// {
//   "orderId": 1,
//   "bookId": 8,
//   "quantity" : 2,
//   "total": 14
// }
// ]
