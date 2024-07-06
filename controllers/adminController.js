const sequelize = require('../config/database');
const { User, UserSession, Collection, Connection, Call } = require('../models/dashboard')(sequelize);
const { Op } = require('sequelize');

exports.getGeneralStats = async (req, res) => {
  try {
    const [totalUsers, avgTimeSpent, genderCounts, totalCollections, totalConnections] = await Promise.all([
      User.count(),
      UserSession.findOne({
        attributes: [[sequelize.fn('AVG', sequelize.col('timeSpent')), 'avgTime']]
      }),
      User.count({
        attributes: ['gender'],
        group: 'gender'
      }),
      Collection.count(),
      Connection.count()
    ]);

    const genderMap = genderCounts.reduce((acc, { gender, count }) => {
      acc[gender] = count;
      return acc;
    }, {});

    res.json({
      totalUsers,
      averageTime: avgTimeSpent ? avgTimeSpent.get('avgTime') : 0,
      totalMales: genderMap.male || 0,
      totalFemales: genderMap.female || 0,
      totalCollections,
      totalConnections
    });
  } catch (error) {
    console.error('Error fetching general stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getCallStats = async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ error: 'Date parameter is required' });
    }

    const callStats = await Call.findOne({
      where: {
        callDate: {
          [Op.gte]: new Date(date),
          [Op.lt]: new Date(new Date(date).setDate(new Date(date).getDate() + 1))
        }
      },
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('id')), 'totalCalls'],
        [sequelize.fn('SUM', sequelize.literal(`CASE WHEN status = 'accepted' THEN 1 ELSE 0 END`)), 'acceptedCalls'],
        [sequelize.fn('SUM', sequelize.literal(`CASE WHEN status = 'not_accepted' THEN 1 ELSE 0 END`)), 'notAcceptedCalls'],
        [sequelize.fn('SUM', sequelize.literal(`CASE WHEN duration < 180 THEN 1 ELSE 0 END`)), 'lessThan3mCalls'],
        [sequelize.fn('SUM', sequelize.literal(`CASE WHEN duration < 60 THEN 1 ELSE 0 END`)), 'lessThan60sCalls']
      ]
    });

    res.json(callStats ? callStats.get() : {
      totalCalls: 0,
      acceptedCalls: 0,
      notAcceptedCalls: 0,
      lessThan3mCalls: 0,
      lessThan60sCalls: 0
    });
  } catch (error) {
    console.error('Error fetching call stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};