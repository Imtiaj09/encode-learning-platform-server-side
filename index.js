const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
  res.send('Course API Running');
});

app.listen(port, () => {
  console.log('Encode Server Running on port', port)
})