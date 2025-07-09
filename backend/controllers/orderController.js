const db = require('../models');

// Place a new order
exports.placeOrder = async (req, res) => {
  const { userId, items } = req.body; // items: [{ itemId, quantity }]
  try {
    let totalPrice = 0;

    for (const i of items) {
      const item = await db.Item.findByPk(i.itemId);
      if (!item) {
        return res.status(404).json({ message: `Item with ID ${i.itemId} not found` });
      }
      totalPrice += item.price * i.quantity;
    }

    const order = await db.Order.create({ userId, totalPrice });

    for (const i of items) {
      await db.OrderItem.create({
        orderId: order.id,
        itemId: i.itemId,
        quantity: i.quantity
      });
    }

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    console.error('Error placing order:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get previous orders by user
exports.getUserOrders = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await db.Order.findAll({
      where: { userId },
      include: [
        {
          model: db.OrderItem,
          include: [db.Item]
        }
      ]
    });
    res.json(orders);
  } catch (err) {
    console.error('Error fetching user orders:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
