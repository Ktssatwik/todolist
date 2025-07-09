module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define("orderItem", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  });

  return OrderItem;
};
