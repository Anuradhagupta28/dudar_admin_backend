


const sequelize = require('../config/database');
const { Exam } = require('../models/content')(sequelize);
const { Subject } = require('../models/content')(sequelize);
const {Chapter }= require('../models/content')(sequelize);
const {Author} = require('../models/content')(sequelize);

// Exam CRUD operations

exports.createExam = async (req, res) => {
  try {
    const { examName, description, passingPercentage, status } = req.body;
    const newExam = await Exam.create({ examName, description, passingPercentage, status });
    res.status(201).json(newExam);
  } catch (error) {
    console.error('Error creating exam list:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllExam = async (req, res) => {
  try {
    const exam = await Exam.findAll();
    res.json(exam);
  } catch (error) {
    console.error('Error fetching exam:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findByPk(req.params.id);
    if (exam) {
      res.json(exam);
    } else {
      res.status(404).json({ error: 'exam not found' });
    }
  } catch (error) {
    console.error('Error fetching exam:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateExam = async (req, res) => {
  try {
    const { examName, description, passingPercentage, status } = req.body;
    const [updated] = await Exam.update(
      { examName, description, passingPercentage, status },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedExam = await Exam.findByPk(req.params.id);
      res.json(updatedExam);
    } else {
      res.status(404).json({ error: 'Exam not found' });
    }
  } catch (error) {
    console.error('Error updating Exam:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteExam = async (req, res) => {
  try {
    const deleted = await Exam.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Exam not found' });
    }
  } catch (error) {
    console.error('Error deleting Exam:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Subject CRUD operations
exports.createSubject = async (req, res) => {
  try {
    const { examName, description, subjectName, status } = req.body;
    const newSubject = await Subject.create({ examName, description, subjectName, status });
    res.status(201).json(newSubject);
  } catch (error) {
    console.error('Error creating subject:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.json(subjects);
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
      res.json(subject);
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    console.error('Error fetching subject:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.updateSubject = async (req, res) => {
  try {
    const { examName, description, subjectName, status } = req.body;
    const [updated] = await Subject.update(
      {  examName, description, subjectName, status },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedSubject = await Subject.findByPk(req.params.id);
      res.json(updatedSubject);
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    console.error('Error updating subject:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.deleteSubject = async (req, res) => {
  try {
    const deleted = await Subject.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    console.error('Error deleting subject:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Chapter CRUD operations

exports.createChapter = async (req, res) => {
  try {
    const { examName, chapterName, subjectName, description, status } = req.body;
    const newChapter = await Chapter.create({ examName, chapterName, subjectName, description, status });
    res.status(201).json(newChapter);
  } catch (error) {
    console.error('Error creating chapter:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.findAll();
    res.json(chapters);
  } catch (error) {
    console.error('Error fetching chapters:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getChapterById = async (req, res) => {
  try {
    const chapter = await Chapter.findByPk(req.params.id);
    if (chapter) {
      res.json(chapter);
    } else {
      res.status(404).json({ error: 'Chapter not found' });
    }
  } catch (error) {
    console.error('Error fetching chapter:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateChapter = async (req, res) => {
  try {
    const { examName, chapterName, subjectName, description, status } = req.body;
    const [updated] = await Chapter.update(
      { examName, chapterName, subjectName, description, status },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedChapter = await Chapter.findByPk(req.params.id);
      res.json(updatedChapter);
    } else {
      res.status(404).json({ error: 'Chapter not found' });
    }
  } catch (error) {
    console.error('Error updating chapter:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteChapter = async (req, res) => {
  try {
    const deleted = await Chapter.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Chapter not found' });
    }
  } catch (error) {
    console.error('Error deleting chapter:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Author CRUD operations

exports.createAuthor = async (req, res) => {
  try {
    const { examName, subjectName, author, description, status } = req.body;
    const newAuthor = await Author.create({ examName, subjectName, author, description, status });
    res.status(201).json(newAuthor);
  } catch (error) {
    console.error('Error creating author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    console.error('Error fetching authors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    console.error('Error fetching author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const { examName, subjectName, author, description, status } = req.body;
    const [updated] = await Author.update(
      { examName, subjectName, author, description, status },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedAuthor = await Author.findByPk(req.params.id);
      res.json(updatedAuthor);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    console.error('Error updating author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const deleted = await Author.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    console.error('Error deleting author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


