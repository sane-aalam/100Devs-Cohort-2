// write basic express code
// express.json() with midleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const port = 3000;
// Middleware to parse JSON bodies
app.use(express.json());

/** body>
 * title : string
 * desctiption : string
 */

app.post("/todo", (req, res) => {
  // take input through the postman [body.tittle and body.desciption]
  // we have to validation using zod
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
  }
  // put into mongoDB
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
