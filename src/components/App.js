import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <div className="container p-4"
               style={{
                   minWidth: 720
               }}
    >
        <h2 className="d-flex justify-content-center">Todo list</h2>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App
