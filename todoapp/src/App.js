import React from 'react';
import './Styles.css';
import Header from './components/Header';
import Footer from './components/Footer'
import ToDo from './components/ToDo';
import AddToDo_Main from './components/addToDo/AddToDo_Main';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.apiURL = "http://localhost:3000";

    this.state = {
      todos: []
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

  // When the app starts, get todos from the database and set it to the state
  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    fetch(`${this.apiURL}/todo`)
      .then(res => res.json())
      .then((data) => {

        let todos = data.data;

        // Convert 'completed' from 0's to bools
        for (let i = 0; i < todos.length; i++) {
          if (todos[i].completed === 0) {
            todos[i].completed = false;
          } else {
            todos[i].completed = true;
          }
        }

        // Set todos in the state
        this.setState({ todos })
      })
      .catch(console.log)
  }

  // Adds a new ToDo
  addToDo = desc => {
    fetch(`${this.apiURL}/todo?desc="${desc}"&completed=0`, { "method": "POST" })
      .then(res => res.json())
      .then((data) => {

        //Refresh ToDos
        this.getTodos();

      })
      .catch(console.log)

  }

  // Marks a ToDo as completed
  setAsCompleted = id => {
    // Get the selected todo
    let editedToDo = this.state.todos.filter(todo => todo.id === id);
    editedToDo = editedToDo[0];

    // Flip the completed value and return it as a number
    editedToDo.completed = editedToDo.completed ? 0 : 1;

    fetch(`${this.apiURL}/todo?id=${editedToDo.id}&desc="${editedToDo.desc}"&completed=${editedToDo.completed}`, { "method": "PUT" })
      .then(res => res.json())
      .then((data) => {

        //Refresh ToDos
        this.getTodos();

      })
      .catch(console.log)
  }

  // Removes ToDo
  removeToDo = id => {
    fetch(`${this.apiURL}/todo/${id}`, { "method": "DELETE" })
      .then(res => res.json())
      .then((data) => {

        //Refresh ToDos
        this.getTodos();

      })
      .catch(console.log)
  }

  render() {
    return (
      <div>

        <Header />

        {/* Main content */}
        <div className="wrapper">

          {/* Shows all todos from state.todos */}
          {this.state.todos.map(toDo => {
            return <ToDo key={toDo.id} id={toDo.id} desc={toDo.desc} completed={toDo.completed} setAsCompleted={this.setAsCompleted} remove={this.removeToDo} />
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
