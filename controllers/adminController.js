const AdminModel = require('../models/adminModel');

class AdminController {
  static getAdminPanelData(req, res) {
    const date = req.query.date || '2024-07-02'; // Default date if not provided

    AdminModel.getAdminPanelData(date, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      const data = results[0];
      
      // In a real application, you'd fetch the previous week's data and pass it to calculatePercentageChanges
      const changes = AdminModel.calculatePercentageChanges(data, {});
      
      res.json({...data, ...changes});
    });
  }
}

module.exports = AdminController;