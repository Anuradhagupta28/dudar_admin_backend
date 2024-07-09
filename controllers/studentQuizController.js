const sequelize = require('../config/database');

const { StudentQuiz } = require('../models/studentQuizModel')(sequelize);



exports.createStudentQuiz = async (req, res) => {
  try {
    const { exam, subject, chapter, question, image, correct, solution, difficultyLevel,mark,duration,status } = req.body;
    const newStudentQuiz = await StudentQuiz.create({ exam, subject, chapter, question, image, correct, solution, difficultyLevel,mark,duration,status});
    res.status(201).json({ message: 'StudentQuiz created successfully', newStudentQuiz });
  } catch (error) {
    console.error('Error creating studentQuiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllStudentQuizzes = async (req, res) => {
  try {
    const studentQuizzes = await StudentQuiz.findAll();
    res.json({ message: 'StudentQuizzes fetched successfully', studentQuizzes });
  } catch (error) {
    console.error('Error fetching studentQuizzes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getStudentQuizById = async (req, res) => {
  try {
    const studentQuiz = await StudentQuiz.findOne({ where: { uuid: req.params.uuid } });
    if (studentQuiz) {
      res.json({ message: 'StudentQuiz fetched successfully', studentQuiz });
    } else {
      res.status(404).json({ error: 'StudentQuiz not found' });
    }
  } catch (error) {
    console.error('Error fetching studentQuiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateStudentQuiz = async (req, res) => {
  try {
    const { exam, subject, chapter, question, image, correct, solution, difficultyLevel,mark,duration,status } = req.body;
    const [updated] = await StudentQuiz.update(
      { exam, subject, chapter, question, image, correct, solution, difficultyLevel,mark,duration,status },
      { where: { uuid: req.params.uuid } }
    );
    if (updated) {
      const updatedStudentQuiz = await StudentQuiz.findOne({ where: { uuid: req.params.uuid } });
      res.json({ message: 'StudentQuiz updated successfully', updatedStudentQuiz });
    } else {
      res.status(404).json({ error: 'StudentQuiz not found' });
    }
  } catch (error) {
    console.error('Error updating studentQuiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteStudentQuiz = async (req, res) => {
  try {
    const deleted = await StudentQuiz.destroy({ where: { uuid: req.params.uuid } });
    if (deleted) {
      res.status(200).json({ message: 'StudentQuiz deleted successfully' });
    } else {
      res.status(404).json({ error: 'StudentQuiz not found' });
    }
  } catch (error) {
    console.error('Error deleting studentQuiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
  