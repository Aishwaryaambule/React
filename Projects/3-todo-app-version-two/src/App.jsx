import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";


function App() {

  const TodoItem = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2023',
    },
    {
      name: 'Go to College',
      dueDate: '4/10/2023',
    },

    {
      name: 'Like this video',
      dueDate: 'right',
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems TodoItems={TodoItems}/>
     
    </center>
  );
}

export default App;
