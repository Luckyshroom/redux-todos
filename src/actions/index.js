export const addTodo = (id, note, content, importance, deadline) => ({
    type: 'ADD_TODO',
    id,
    note,
    content,
    importance,
    deadline
});

export const editTodo = (id, content, importance, deadline) => ({
    type: 'EDIT_TODO',
    id,
    content,
    importance,
    deadline
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_USUAL: 'SHOW_USUAL',
    SHOW_INCREASED: 'SHOW_INCREASED',
    SHOW_HIGH: 'SHOW_HIGH'
};
