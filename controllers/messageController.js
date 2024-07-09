const sequelize = require('../config/database');

const { Message } = require('../models/messageModel')(sequelize);



exports.createMessage = async (req, res) => {
  try {
    const { image, userType, order, time, visible } = req.body;
    const newMessage = await Message.create({ image, userType, order, time, visible });
    res.status(201).json({ message: 'Message created successfully', newMessage });
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json({ message: 'Messages fetched successfully', messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getMessageById = async (req, res) => {
  try {
    const message = await Message.findOne({ where: { uuid: req.params.uuid } });
    if (message) {
      res.json({ message: 'Message fetched successfully', message });
    } else {
      res.status(404).json({ error: 'Message not found' });
    }
  } catch (error) {
    console.error('Error fetching message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateMessage = async (req, res) => {
  try {
    const { image, userType, order, time, visible } = req.body;
    const [updated] = await Message.update(
      { image, userType, order, time, visible },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedMessage = await Message.findOne({ where: { uuid: req.params.uuid } });
      res.json({ message: 'Message updated successfully', updatedMessage });
    } else {
      res.status(404).json({ error: 'Message not found' });
    }
  } catch (error) {
    console.error('Error updating message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const deleted = await Message.destroy({ where: { uuid: req.params.uuid } });
    if (deleted) {
      res.status(200).json({ message: 'Message deleted successfully' });
    } else {
      res.status(404).json({ error: 'Message not found' });
    }
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
