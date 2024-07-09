const express = require('express');
const sequelize = require('./config/database');
const adminRoutes = require('./routes/adminRoutes');
const contentRoutes = require('./routes/contentRoutes');
const roleRoutes = require('./routes/roleRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const blogRoutes = require('./routes/blogRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const onlineTeacherRoutes = require('./routes/onlineTeacherRoutes');
const messageRoutes = require('./routes/messageRoutes');
const questionRoutes = require('./routes/questionRoutes');
const todayDoubtsRoutes = require('./routes/todayDoubtsRoutes');
const doubtHistoryRoutes = require('./routes/doubtHistoryRoutes');
const reportRoutes = require('./routes/reportRoutes');
const teacherQuizRoutes = require('./routes/teacherQuizRoutes');
const studentQuizRoutes = require('./routes/studentQuizRoutes');

require('./models/dashboard')(sequelize);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/content', contentRoutes);
app.use('/role', roleRoutes);
app.use('/school', schoolRoutes);
app.use('/blog', blogRoutes);
app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);
app.use('/onlineTeacher', onlineTeacherRoutes);
app.use('/message', messageRoutes);
app.use('/question', questionRoutes);
app.use('/todayDoubts', todayDoubtsRoutes);
app.use('/doubtHistory', doubtHistoryRoutes);
app.use('/report', reportRoutes);
app.use('/teacherQuiz', teacherQuizRoutes);
app.use('/studentQuiz', studentQuizRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Admin panel API running on port ${port}`);
  });
});
