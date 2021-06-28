const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    name: {
      type: DataTypes.STRING,
      allowNull: false, //requred
    },

    slug: {
      type: DataTypes.STRING,
      unique: true,
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

  SequelizeSlugify.slugifyModel(Book, {
    source: ["name"],
  });

  // Relations
  Book.associate = (models) => {
    // Library has many Book
    models.Library.hasMany(Book, {
      foreignKey: "libraryId", // Change the column name from LibraryId => libraryId
      as: "books", // The alias of this relation
      allowNull: false,
    });
    Book.belongsTo(models.Library, {
      foreignKey: "libraryId",
      as: "library",
    });
  };

  return Book;
};
