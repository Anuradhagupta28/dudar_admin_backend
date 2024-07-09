const sequelize = require('../config/database');

const { TeacherQuiz } = require('../models/teacherQuizModel')(sequelize);


exports.createTeacherQuiz = async (req, res) => {
  try {
    const { exam, subject, chapter, questionImage, correct, mark, duration,status } = req.body;
    const newTeacherQuiz = await TeacherQuiz.create({ exam, subject, chapter, questionImage, correct, mark, duration ,status});
    res.status(201).json({ message: 'TeacherQuiz created successfully', newTeacherQuiz });
  } catch (error) {
    console.error('Error creating teacherQuiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllTeacherQuizzes = async (req, res) => {
  try {
    const teacherQuizzes = await TeacherQuiz.findAll();
    res.json({ message: 'TeacherQuizzes fetched successfully', teacherQuizzes });
  } catch (error) {
    console.error('Error fetching teacherQuizzes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTeacherQuizById = async (req, res) => {
  try {
    const teacherQuiz = await TeacherQuiz.findOne({ where: { id: req.params.id } });
    if (teacherQuiz) {
      res.json({ message: 'TeacherQuiz fetched successfully', teacherQuiz });
    } else {
      res.status(404).json({ error: 'TeacherQuiz not found' });
    }
  } catch (error) {
    console.error('Error fetching teacherQuiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTeacherQuiz = async (req, res) => {
  try {
    const { exam, subject, chapter, questionImage, correct, mark, duration,status } = req.body;
    const [updated] = await TeacherQuiz.update(
      { exam, subject, chapter, questionImage, correct, mark, duration,status },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedTeacherQuiz = await TeacherQuiz.findOne({ where: { id: req.params.id } });
      res.json({ message: 'TeacherQuiz updated successfully', updatedTeacherQuiz });
    } else {
      res.status(404).json({ error: 'TeacherQuiz not found' });
    }
  } catch (error) {
    console.error('Error updating teacherQuiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteTeacherQuiz = async (req, res) => {
  try {
    const deleted = await TeacherQuiz.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: 'TeacherQuiz deleted successfully' });
    } else {
      res.status(404).json({ error: 'TeacherQuiz not found' });
    }
  } catch (error) {
    console.error('Error deleting teacherQuiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
