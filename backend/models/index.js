const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

// Create Sequelize instance
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: dbConfig.pool,
});

// Test connection (optional but useful)
sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected!"))
  .catch((err) => console.error("❌ Database connection failed:", err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Use uppercase keys here to be consistent
db.User = require("./user.model.js")(sequelize, DataTypes);
db.Item = require("./item.model.js")(sequelize, DataTypes);
db.Order = require("./order.model.js")(sequelize, DataTypes);
db.OrderItem = require("./orderItem.model.js")(sequelize, DataTypes);

// Define relations:
db.User.hasMany(db.Order);
db.Order.belongsTo(db.User);

db.Order.belongsToMany(db.Item, { through: db.OrderItem });
db.Item.belongsToMany(db.Order, { through: db.OrderItem });

module.exports = db;
