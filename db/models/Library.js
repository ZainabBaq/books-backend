const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define("Library", {
    name: {
      type: DataTypes.STRING,
      allowNull: false, //requred
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    img: { type: DataTypes.STRING },
  });

  SequelizeSlugify.slugifyModel(Library, {
    source: ["name"],
  });

  return Library;
};
