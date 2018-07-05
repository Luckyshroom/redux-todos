import React from 'react'
import AddTodo from '../components/AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../components/VisibleTodoList'
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
