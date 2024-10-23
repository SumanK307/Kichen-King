import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {
  const [menu , setMenu] =useState("Home");   //Menu

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    Navigate("/");
  }
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo2} alt="" className="logo2" /></Link>
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
          <a href='#app-download' onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile App</a>
          <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="" />
          <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          {!token?<button onClick={()=>setShowLogin(true)}>Login</button>
          :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
            </div>}  
        </div>
    </div>
  )
}

export default Navbar