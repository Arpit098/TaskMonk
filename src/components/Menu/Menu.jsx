import React from 'react'
import  './Menu.css';
import { Link, Router, Routes } from "react-router-dom"
import Dashboard from '../../pages/dashboard/Dashboard';
const Menu = () => {
  return (
    <nav>
    <div className='menu'>
      <div className="item">
        <span className="title">MAIN</span>
       <Link to="/home/dashboard" className="links">
          <img src="/chart.svg" alt="" />
          <span className="listitem">DashBoard</span>
        </Link>
        <span className="title">ACCOUNT</span>
       <Link to="/home/profile" className="links">
          <img src="/profile.svg" alt="" />
          <span className="listitem">Profile</span>
        </Link>
       <Link to="/home/users" className="links">
          <img src="/user.svg" alt="" />
          <span className="listitem">Users</span>
        </Link>
        <span className="title">TASK MANAGEMENT</span>
       <Link to="/home/taskmanager" className="links">
          <img src="/view.svg" alt="" />
          <span className="listitem">TaskManager</span>
        </Link>
        <Link to="/home/todolist" className="links">
          <img src="/note.svg" alt="" />
          <span className="listitem">TodoList</span>
        </Link>
       <Link to="/home/calender" className="links">
          <img src="/calendar.svg" alt="" />
          <span className="listitem">Calender</span>
        </Link>
        <span className="listitem">General</span>
        <Link to="/home/settings" className="links">
          <img src="/settings.svg" alt="" />
          <span className="listitem">Settings</span>
        </Link>
        <Link to="/more" className="links">
          <img src="/app.svg" alt="" />
          <span className="listitem">More</span>
        </Link>
      </div>
    </div>
    </nav>
  
  )
}

export default Menu