const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    note: action.note,
                    content: action.content,
                    importance: action.importance,
                    deadline: action.deadline,
                    completed: null,
                    isCompleted: false
                }
            ];
        case 'EDIT_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, content: action.content, importance: action.importance, deadline: action.deadline}
                    : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, isCompleted: !todo.isCompleted, completed: (new Date()).toISOString().split("T")[0]}
                    : todo
            );
        default:
            return state
    }
};

export default todos
