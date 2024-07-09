const sequelize = require('../config/database');

const { Question } = require('../models/questionModel')(sequelize);


exports.createQuestion = async (req, res) => {
  try {
    const { question, solution, createdBy, viewQuestion, status, reviewedBy } = req.body;
    const newQuestion = await Question.create({ question, solution, createdBy, viewQuestion, status, reviewedBy });
    res.status(201).json({ message: 'Question created successfully', newQuestion });
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json({ message: 'Questions fetched successfully', questions });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findOne({ where: { id: req.params.id } });
    if (question) {
      res.json({ message: 'Question fetched successfully', question });
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const { question, solution, createdBy, viewQuestion, status, reviewedBy } = req.body;
    const [updated] = await Question.update(
      { question, solution, createdBy, viewQuestion, status, reviewedBy },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedQuestion = await Question.findOne({ where: { id: req.params.id } });
      res.json({ message: 'Question updated successfully', updatedQuestion });
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    console.error('Error updating question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const deleted = await Question.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: 'Question deleted successfully' });
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
