import React from 'react'
import  './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <span>TaskMonk</span>
      </div>
      <div className="icons">
         <img src="/search.svg" alt="" className="icon" />
         <div className="notification">
           <img src="/notifications.svg" alt="" />
           <span>1</span>
         </div>
         <img src="/expand.svg" alt="" className="icon" />
         <div className="user">
          <img src="https://th.bing.com/th/id/OIP.LMa4FuoR3Ya92Ym42Br0DQHaEn?w=297&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" />
          <span>User</span>
         </div>
      </div>
    </div>
  )
}

export default Navbar