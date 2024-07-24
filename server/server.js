/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [
  { id: 1, username: 'student1', password: bcrypt.hashSync('password1', 8), role: 'Student' },
  { id: 2, username: 'faculty1', password: bcrypt.hashSync('password2', 8), role: 'Faculty Member' },
  { id: 3, username: 'admin1', password: bcrypt.hashSync('password3', 8), role: 'Administrator' },
];

app.post('/api/login', (req, res) => {
  const { username, password, role } = req.body;
  const user = users.find(u => u.username === username && u.role === role);
  
  if (!user) {
    return res.status(400).send({ message: 'Invalid credentials' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({ accessToken: null, message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, 'supersecret', {
    expiresIn: 86400, // 24 hours
  });

  res.status(200).send({ id: user.id, username: user.username, role: user.role, accessToken: token });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
*/
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const users = [
  { username: 'student1', password: 'password1', role: 'Student' },
  { username: 'faculty1', password: 'password2', role: 'Faculty Member' },
  { username: 'admin1', password: 'password3', role: 'Administrator' }
];

app.post('/api/login', (req, res) => {
  const { username, password, role } = req.body;
  const user = users.find(u => u.username === username && u.password === password && u.role === role);

  if (user) {
    res.json({ role: user.role });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

