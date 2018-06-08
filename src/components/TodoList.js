import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends Component{
    render() {
        let {todos, deleteTodo, toggleTodo} = this.props;

        return (
            <table className="table table-striped mb-4">
                <thead>
                <tr>
                    <th>Note</th>
                    <th>Description</th>
                    <th>Importance</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Edit/Delete</th>
                </tr>
                </thead>
                <tbody>
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        deleteTodo={() => deleteTodo(todo.id)}
                        toggleTodo={() => toggleTodo(todo.id)}
                    />
                )}
                </tbody>
            </table>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        note: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        importance: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList
