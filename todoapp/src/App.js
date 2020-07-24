import React from 'react';
import './Styles.css';
import Header from './components/Header';
import Footer from './components/Footer'
import ToDo from './components/ToDo';
import AddToDo from './components/addToDo/AddToDo';

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

  addNewTodo = desc => {
    let newTodos = this.state.todos;
  }

  setAsCompleted = id => {
    let newTodos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({
      todos: newTodos
    });
  }

  remove = id => {
    let newTodos = this.state.todos;

      for(let i = 0; i < newTodos.length; i++){
        if(newTodos[i].id === id){
          newTodos.splice(i, 1);
          break;
        }
      }

    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div>
        <Header />

        <div className="wrapper">
          {this.state.todos.map(toDo => {
            return <ToDo id={toDo.id} desc={toDo.desc} completed={toDo.completed} setAsCompleted={this.setAsCompleted} remove={this.remove} />
          })}

          <AddToDo />

        </div>

        <Footer />
      </div>
    );
  }
}



export default App;
