const PORT = process.env.PORT ?? 8000;
const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/todos/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  console.log(userEmail);
  try {
    const todo = await pool.query("SELECT * FROM todo WHERE user_email = $1", [
      userEmail,
    ]);
    res.json(todo.rows);
  } catch (error) {
    console.log(error);
  }
});
//test
app.post("/todos", (req, res) => {
  const id = uuidv4();
  const id2 = uuidv4();
  const { user_email, task_title, progress, deadline } = req.body;
  console.log(id, user_email, task_title, progress, deadline);
  try {
    pool.query(
      `INSERT INTO todo (id, user_email, title, progress, date) VALUES ($1, $2, $3, $4, $5)`,
      [id, user_email, task_title, progress, deadline]
    );
    console.log("ok");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`server running on PORTt ${PORT}`));
