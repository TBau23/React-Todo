import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    inputChange = e => {
        this.setState({
            task: e.target.value
        });
        
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.task)
        this.setState({
            task: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
                name='task'
                value={this.state.task}
                onChange={this.inputChange}

                />
                <button>Add ToDo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>

            </form>
        )
    }
}

export default TodoForm;