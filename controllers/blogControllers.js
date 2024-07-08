const sequelize = require('../config/database');

const { Author, Blog} = require('../models/blogModel')(sequelize);

// Author CRUD operations
exports.createAuthor = async (req, res) => {
    try {
      const { name, email, photo, about, linkedin, status } = req.body;
      const newAuthor = await Author.create({ name, email, photo, about, linkedin, status });
      res.status(201).json({ message: 'Author created successfully', newAuthor });
    } catch (error) {
      console.error('Error creating author:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getAllAuthors = async (req, res) => {
    try {
      const authors = await Author.findAll();
      res.json({ message: 'Authors fetched successfully', authors });
    } catch (error) {
      console.error('Error fetching authors:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getAuthorById = async (req, res) => {
    try {
      const author = await Author.findOne({ where: { uuid: req.params.uuid } });
      if (author) {
        res.json({ message: 'Author fetched successfully', author });
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
      const { name, email, photo, about, linkedin, status } = req.body;
      const [updated] = await Author.update(
        { name, email, photo, about, linkedin, status },
        { where: { uuid: req.params.uuid } }
      );
      if (updated) {
        const updatedAuthor = await Author.findOne({ where: { uuid: req.params.uuid } });
        res.json({ message: 'Author updated successfully', updatedAuthor });
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
      const deleted = await Author.destroy({ where: { uuid: req.params.uuid } });
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

  // Blog CRUD operations
exports.createBlog = async (req, res) => {
    try {
      const { authorName, title, tags } = req.body;
      const newBlog = await Blog.create({ authorName, title, tags });
      res.status(201).json({ message: 'Blog created successfully', newBlog });
    } catch (error) {
      console.error('Error creating blog:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blog.findAll();
      res.json({ message: 'Blogs fetched successfully', blogs });
    } catch (error) {
      console.error('Error fetching blogs:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getBlogById = async (req, res) => {
    try {
      const blog = await Blog.findOne({ where: { uuid: req.params.uuid } });
      if (blog) {
        res.json({ message: 'Blog fetched successfully', blog });
      } else {
        res.status(404).json({ error: 'Blog not found' });
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.updateBlog = async (req, res) => {
    try {
      const { authorName, title, tags } = req.body;
      const [updated] = await Blog.update(
        { authorName, title, tags },
        { where: { uuid: req.params.uuid } }
      );
      if (updated) {
        const updatedBlog = await Blog.findOne({ where: { uuid: req.params.uuid } });
        res.json({ message: 'Blog updated successfully', updatedBlog });
      } else {
        res.status(404).json({ error: 'Blog not found' });
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.deleteBlog = async (req, res) => {
    try {
      const deleted = await Blog.destroy({ where: { uuid: req.params.uuid } });
      if (deleted) {
        res.status(200).json({ message: 'Blog deleted successfully' });
      } else {
        res.status(404).json({ error: 'Blog not found' });
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  