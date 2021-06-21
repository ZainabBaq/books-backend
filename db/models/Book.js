module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Book", {
    name: {
      type: DataTypes.STRING,
      allowNull: false, //requred
    },
    description: { type: DataTypes.STRING },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: {
        min: 3,
        max: 20,
      },
    },
    img: { type: DataTypes.STRING },
  });
};
