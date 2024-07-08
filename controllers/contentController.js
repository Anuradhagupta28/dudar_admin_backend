


const sequelize = require('../config/database');



const { Exam, Subject, Chapter, Author } = require('../models/content')(sequelize);

// Exam CRUD operations
exports.createExam = async (req, res) => {
  try {
    const { examName, description, passingPercentage, status } = req.body;
    const newExam = await Exam.create({ examName, description, passingPercentage, status });
    res.status(201).json({ message: 'Exam created successfully', exam: newExam });
  } catch (error) {
    console.error('Error creating exam:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllExam = async (req, res) => {
  try {
    const exams = await Exam.findAll();
    res.status(200).json({ message: 'Exams fetched successfully', exams });
  } catch (error) {
    console.error('Error fetching exams:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findByPk(req.params.uuid);
    if (exam) {
      res.status(200).json({ message: 'Exam fetched successfully', exam });
    } else {
      res.status(404).json({ error: 'Exam not found' });
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
      { where: { uuid: req.params.uuid } }
    );
    if (updated) {
      const updatedExam = await Exam.findByPk(req.params.uuid);
      res.status(200).json({ message: 'Exam updated successfully', exam: updatedExam });
    } else {
      res.status(404).json({ error: 'Exam not found' });
    }
  } catch (error) {
    console.error('Error updating exam:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteExam = async (req, res) => {
  try {
    const deleted = await Exam.destroy({ where: { uuid: req.params.uuid } });
    if (deleted) {
      res.status(200).json({ message: 'Exam deleted successfully' });
    } else {
      res.status(404).json({ error: 'Exam not found' });
    }
  } catch (error) {
    console.error('Error deleting exam:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Subject CRUD operations
exports.createSubject = async (req, res) => {
  try {
    const { examName, description, subjectName, status } = req.body;
    const newSubject = await Subject.create({ examName, description, subjectName, status });
    res.status(201).json({ message: 'Subject created successfully', subject: newSubject });
  } catch (error) {
    console.error('Error creating subject:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.status(200).json({ message: 'Subjects fetched successfully', subjects });
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
      res.status(200).json({ message: 'Subject fetched successfully', subject });
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
      { examName, description, subjectName, status },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedSubject = await Subject.findByPk(req.params.id);
      res.status(200).json({ message: 'Subject updated successfully', subject: updatedSubject });
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
      res.status(200).json({ message: 'Subject deleted successfully' });
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
    res.status(201).json({ message: 'Chapter created successfully', chapter: newChapter });
  } catch (error) {
    console.error('Error creating chapter:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.findAll();
    res.status(200).json({ message: 'Chapters fetched successfully', chapters });
  } catch (error) {
    console.error('Error fetching chapters:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getChapterById = async (req, res) => {
  try {
    const chapter = await Chapter.findByPk(req.params.id);
    if (chapter) {
      res.status(200).json({ message: 'Chapter fetched successfully', chapter });
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
      res.status(200).json({ message: 'Chapter updated successfully', chapter: updatedChapter });
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
      res.status(200).json({ message: 'Chapter deleted successfully' });
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
    res.status(201).json({ message: 'Author created successfully', author: newAuthor });
  } catch (error) {
    console.error('Error creating author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json({ message: 'Authors fetched successfully', authors });
  } catch (error) {
    console.error('Error fetching authors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      res.status(200).json({ message: 'Author fetched successfully', author });
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
      res.status(200).json({ message: 'Author updated successfully', author: updatedAuthor });
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
      res.status(200).json({ message: 'Author deleted successfully' });
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    console.error('Error deleting author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



