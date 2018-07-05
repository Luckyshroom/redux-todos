import TodoList from './TodoList'
import {connect} from 'react-redux'
import {deleteTodo, toggleTodo} from '../actions/index'
import {VisibilityFilters} from '../actions/index'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_USUAL:
            return todos.filter(t => t.importance === 'Usual');
        case VisibilityFilters.SHOW_INCREASED:
            return todos.filter(t => t.importance === 'Increased');
        case VisibilityFilters.SHOW_HIGH:
            return todos.filter(t => t.importance === 'High');
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

export default connect(
    state => ({
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }),
    dispatch => ({
        deleteTodo: id => dispatch(deleteTodo(id)),
        toggleTodo: id => dispatch(toggleTodo(id))
    })
)(TodoList)
