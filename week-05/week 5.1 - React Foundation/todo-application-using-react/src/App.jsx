import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Complete React Project",
      description: "Finish the components and integrate with backend.",
      taskDone: false,
    },
    {
      title: "Study for Exams",
      description: "Review chapters 3, 4, and 5 from the textbook.",
      taskDone: false,
    },
    {
      title: "Grocery Shopping",
      description: "Buy fruits, vegetables, and dairy products.",
      taskDone: false,
    },
    {
      title: "Workout",
      description: "Attend the 6 PM yoga class at the gym.",
      taskDone: false,
    },
    {
      title: "Read a Book",
      description: "Finish reading 'Atomic Habits' by James Clear.",
      taskDone: false,
    },
  ]);

  // Function to toggle the taskDone state
  function toggleTaskDone(index) {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        // During mapping, it checks if the current index matches the provided index.
        i === index ? { ...todo, taskDone: !todo.taskDone } : todo
      )
    );
  }

  // Function to delete a todo
  function deleteTodo(index) {
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  }

  // Function to add a new todo
  // [...oldTodoList,newtodo] = newTodoList combine using
  // Array descturing
  // Object descturing
  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "New Task",
        description: "Description of the new task",
        taskDone: false,
      },
    ]);
  }

  return (
    <>
      {todos.map((todo, index) => (
        <TodoComponent
          key={index}
          title={todo.title}
          description={todo.description}
          taskDone={todo.taskDone}
          onToggleTaskDone={() => toggleTaskDone(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}

// component for add new Todo Items using props
function TodoComponent(props) {
  const { title, description, taskDone, onToggleTaskDone, deleteTodo } = props;

  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={onToggleTaskDone}>
        {taskDone ? "Mark as Undone" : "Mark as Done"}
      </button>
      <button onClick={deleteTodo}>Delete Todo</button>
    </div>
  );
}

export default App;
