import React, { useState } from 'react';
import './Styles/App.css';
import Home from './Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/auth/Login'
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import TaskManager from "./pages/taskmanager/TaskManager";
import TodoList from "./pages/todoList/TodoList";
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}>
          <Route path="/home/users" element={<Users/>}/>
          <Route path="/home/taskmanager" element={<TaskManager/>}/>
          <Route path="/home/todolist" element={<TodoList/>}/>
          <Route path="/home/dashboard" element={<Dashboard/>}/>
      </Route>
      <Route path="/auth/google/success" element={<Dashboard/>}/>
      <Route path="/auth/google/failure" element={<Login/>} />
     </Routes>
   </BrowserRouter> 
  );
}

export default App;
