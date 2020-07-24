import React from 'react';
import './Styles.css';
import Header from './components/Header';
import Footer from './components/Footer'
import ToDo from './components/ToDo';
import AddToDo_Main from './components/addToDo/AddToDo_Main';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: this.createToDos()
    }
  }

  createToDos() {
    let todos = [
      {
        "id": 1,
        "desc": "Make Server",
        "completed": false
      },
      {
        "id": 2,
        "desc": "Make Database",
        "completed": false
      },
      {
        "id": 3,
        "desc": "Make ToDo App",
        "completed": false
      }

    ];

    return todos;

  }

  // Adds a new ToDo
  addToDo = desc => {
    let newTodos = this.state.todos;

    newTodos.push({
      id: newTodos.length + 500,
      desc,
      completed: false
    })

    this.setState({
      todos: newTodos
    })
  }

  // Marks a ToDo as completed
  setAsCompleted = id => {
    let newTodos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({
      todos: newTodos
    });
  }

  // Removes ToDo
  removeToDo = id => {
    // Create a copy of the ToDos array
    let newTodos = this.state.todos;

    // Loop through all ToDos until it finds the right ToDo and then removes it
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === id) {
        newTodos.splice(i, 1);
        break;
      }
    }

    // Update state
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div>

        <Header />

        {/* Main content */}
        <div className="wrapper">

          {/* Shows all todos from state.todos */}
          {this.state.todos.map(toDo => {
            return <ToDo id={toDo.id} desc={toDo.desc} completed={toDo.completed} setAsCompleted={this.setAsCompleted} remove={this.removeToDo} />
          })}

          {/* Menu and button that allows user to add new ToDos */}
          <AddToDo_Main addToDo={this.addToDo} />

        </div>

        <Footer />

      </div>
    );
  }
}



export default App;
