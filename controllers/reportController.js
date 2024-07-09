const sequelize = require('../config/database');

const { Report } = require('../models/reportModel')(sequelize);


exports.createReport = async (req, res) => {
  try {
    const { doubtId, userId, userType, reportedUserId, report, time, readByAdmin } = req.body;
    const newReport = await Report.create({ doubtId, userId, userType, reportedUserId, report, time, readByAdmin });
    res.status(201).json({ message: 'Report created successfully', newReport });
  } catch (error) {
    console.error('Error creating report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.json({ message: 'Reports fetched successfully', reports });
  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getReportById = async (req, res) => {
  try {
    const report = await Report.findOne({ where: { id: req.params.id } });
    if (report) {
      res.json({ message: 'Report fetched successfully', report });
    } else {
      res.status(404).json({ error: 'Report not found' });
    }
  } catch (error) {
    console.error('Error fetching report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const { doubtId, userId, userType, reportedUserId, report, time, readByAdmin } = req.body;
    const [updated] = await Report.update(
      { doubtId, userId, userType, reportedUserId, report, time, readByAdmin },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedReport = await Report.findOne({ where: { id: req.params.id } });
      res.json({ message: 'Report updated successfully', updatedReport });
    } else {
      res.status(404).json({ error: 'Report not found' });
    }
  } catch (error) {
    console.error('Error updating report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const deleted = await Report.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: 'Report deleted successfully' });
    } else {
      res.status(404).json({ error: 'Report not found' });
    }
  } catch (error) {
    console.error('Error deleting report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
