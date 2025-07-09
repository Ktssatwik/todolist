const db = require('../models');

// Vendor sells an item
exports.addItem = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const newItem = await db.Item.create({ name, description, price });
    res.status(201).json({ message: 'Item submitted for approval', newItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Staff approves an item
exports.approveItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await db.Item.findByPk(id);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    item.status = 'approved';
    await item.save();

    res.json({ message: 'Item approved', item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Staff deletes an item
exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await db.Item.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: 'Item not found' });

    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// User views approved inventory
exports.getInventory = async (req, res) => {
  try {
    const items = await db.Item.findAll({ where: { status: 'approved' } });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
