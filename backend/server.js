const PORT = process.env.PORT ?? 8000;
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());

app.get("/todo/:userEmail", async (req, res) => {
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

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
