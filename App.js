
const express = require('express');
const app = express();
const PORT = 3000;


const user = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Bob Smith", email: "bob@example.com" }
];

app.get('/users/get', (req, res) => {
  res.status(200).json(user);
});


app.get('/users/list', (req, res) => {
  res.status(200).json(users);
});


app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
