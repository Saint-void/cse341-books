import app from './app.js';

var port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
