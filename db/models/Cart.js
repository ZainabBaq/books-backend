module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    total: {
      type: DataTypes.INTEGER,
    },
  });

  Cart.associate = (models) => {
    models.Order.belongsToMany(models.Book, {
      through: Cart,
      foreignKey: "orderId",
    });
    models.Book.belongsToMany(models.Order, {
      through: Cart,
      foreignKey: "bookId",
    });
  };

  return Cart;
};
