

const express = require('express');
const sequelize = require('./config/database');
const adminRoutes = require('./routes/adminRoutes');
const contentRoutes = require('./routes/contentRoutes');
require('./models/dashboard')(sequelize);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/content', contentRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Admin panel API running on port ${port}`);
  });
});