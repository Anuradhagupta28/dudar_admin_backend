const db = require('../config/database');

class AdminModel {
  static getAdminPanelData(date, callback) {
    const query = `
      SELECT 
        (SELECT COUNT(*) FROM users) AS total_users,
        (SELECT AVG(time_spent) FROM user_sessions) AS average_time,
        (SELECT COUNT(*) FROM users WHERE gender = 'male') AS total_males,
        (SELECT COUNT(*) FROM users WHERE gender = 'female') AS total_females,
        (SELECT COUNT(*) FROM collections) AS total_collections,
        (SELECT COUNT(*) FROM connections) AS total_connections,
        (SELECT COUNT(*) FROM calls WHERE DATE(call_date) = ?) AS total_calls,
        (SELECT COUNT(*) FROM calls WHERE DATE(call_date) = ? AND status = 'accepted') AS accepted_calls,
        (SELECT COUNT(*) FROM calls WHERE DATE(call_date) = ? AND status = 'not_accepted') AS not_accepted_calls,
        (SELECT COUNT(*) FROM calls WHERE DATE(call_date) = ? AND duration < 180) AS less_than_3m_calls,
        (SELECT COUNT(*) FROM calls WHERE DATE(call_date) = ? AND duration < 60) AS less_than_60s_calls
    `;

    db.query(query, [date, date, date, date, date], callback);
  }

  // Add methods to calculate percentage changes here
  static calculatePercentageChanges(currentData, previousData) {
    // This is a placeholder. In a real application, you'd implement the actual calculation logic
    return {
      users_change: '4%',
      average_time_change: '3%',
      males_change: '34%',
      females_change: '-12%',
      collections_change: '34%',
      connections_change: '34%'
    };
  }
}

module.exports = AdminModel;