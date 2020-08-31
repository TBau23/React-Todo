import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


const todoData = [
  {
    task: 'Finish MVP + Stretch for today',
    id: new Date(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todos: todoData,
    }
  }

  toggleCompleted = clickedTaskId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedTaskId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        if(todo.completed === false) {
          return todo
        }
      })
    })
  }


  addTodo = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        todos={this.state.todos} 
        toggleCompleted={this.toggleCompleted}
        />

        <TodoForm 
        addTodo={this.addTodo}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
