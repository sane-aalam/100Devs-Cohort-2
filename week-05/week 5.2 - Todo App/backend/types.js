// zod for validation 
// just keep pusing the project 
const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  desciption: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

// way to exports the zods
module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
