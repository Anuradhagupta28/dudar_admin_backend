

const express = require('express');
const sequelize = require('./config/database');
const adminRoutes = require('./routes/adminRoutes');
const contentRoutes = require('./routes/contentRoutes');
const roleRoutes = require('./routes/roleRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const blogRoutes = require('./routes/blogRoutes');
require('./models/dashboard')(sequelize);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/content', contentRoutes);
app.use('/role', roleRoutes);
app.use('/school', schoolRoutes);
app.use('/blog', blogRoutes);
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Admin panel API running on port ${port}`);
  });
});