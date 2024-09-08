import express from 'express';
import Database from 'better-sqlite3';

const db = new Database('kanban.db');

const checkUserExists = (username) => {
  const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  //console.log('user:', row);
  return row !== undefined;
}

// precondition: checkUserExists(username) === true (so won't check for undefined)
const validatePassword = (username, password) => {
  const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  //console.log('password:', row);
  return row.password === password;
}

const getUserID = (username) => {
  const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  return row.id;
}

const userBoards = (userId) => {
  const rows = db.prepare('SELECT * FROM board_user WHERE user_id = ?').all(userId);

  // only return a list of board IDs
  for (let i = 0; i < rows.length; i++) {
    rows[i] = rows[i].board_id;
  }
  
  return rows;
}

//const userId = '3';
//console.log(userBoards(userId));

const app = express();
app.use(express.json());

const port = 3000;

// status messages not being propagated
app.post('/login/', (req, res) => {
  const { username, password } = req.body;
  //console.log('Username:', username);
  //console.log('Password:', password);

  if (checkUserExists(username)) {
    if (validatePassword(username, password)) {
      const userID = getUserID(username);
      const boards = userBoards(userID);
      res.status(200).json({
        statusText: 'Login successful',
        ok: true,
        user: { username, userID, boards }
      });
    } else {
      res.status(401).json({
        statusText: 'Invalid password',
        ok: false
      });
    }
  } else {
    res.status(404).json({
      statusText: 'User not found',
      ok: false
    });
  }
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
