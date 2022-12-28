const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.json('Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
});
