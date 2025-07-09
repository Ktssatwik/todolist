module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("item", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("pending", "approved"),
      defaultValue: "pending"
    }
  });

  return Item;
};
