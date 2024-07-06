


const sequelize = require('../config/database');
const { Content } = require('../models/content')(sequelize);

exports.createContent = async (req, res) => {
  try {
    const { examName, description, passingPercentage, status } = req.body;
    const newContent = await Content.create({ examName, description, passingPercentage, status });
    res.status(201).json(newContent);
  } catch (error) {
    console.error('Error creating content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllContent = async (req, res) => {
  try {
    const content = await Content.findAll();
    res.json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getContentById = async (req, res) => {
  try {
    const content = await Content.findByPk(req.params.id);
    if (content) {
      res.json(content);
    } else {
      res.status(404).json({ error: 'Content not found' });
    }
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateContent = async (req, res) => {
  try {
    const { examName, description, passingPercentage, status } = req.body;
    const [updated] = await Content.update(
      { examName, description, passingPercentage, status },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedContent = await Content.findByPk(req.params.id);
      res.json(updatedContent);
    } else {
      res.status(404).json({ error: 'Content not found' });
    }
  } catch (error) {
    console.error('Error updating content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const deleted = await Content.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Content not found' });
    }
  } catch (error) {
    console.error('Error deleting content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};exports.getAllContent = async (req, res) => {
  try {
    const content = await Content.findAll();
    res.json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getContentById = async (req, res) => {
  try {
    const content = await Content.findByPk(req.params.id);
    if (content) {
      res.json(content);
    } else {
      res.status(404).json({ error: 'Content not found' });
    }
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateContent = async (req, res) => {
  try {
    const { examName, description, passingPercentage, status } = req.body;
    const [updated] = await Content.update(
      { examName, description, passingPercentage, status },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedContent = await Content.findByPk(req.params.id);
      res.json(updatedContent);
    } else {
      res.status(404).json({ error: 'Content not found' });
    }
  } catch (error) {
    console.error('Error updating content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const deleted = await Content.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Content not found' });
    }
  } catch (error) {
    console.error('Error deleting content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};