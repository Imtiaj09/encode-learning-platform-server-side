const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
  res.send('Course API Running');
});

app.get('/course-categories', (req, res) => {
  res.send(categories);
});

app.get('/course', (req, res) => {
  res.send(course)
})

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  const course_Category = course.find(c => c.category_id === id);
  res.send(course_Category)
});

app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  const course_Category = course.find(c => c._id === id);
  res.send(course_Category)
});


app.get('/singleCourse/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find(c => c._id === id);
  res.send(selectedCourse)
});

app.listen(port, () => {
  console.log('Encode Server Running on port', port)
});

module.exports = app;