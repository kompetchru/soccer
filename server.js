const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('out'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
