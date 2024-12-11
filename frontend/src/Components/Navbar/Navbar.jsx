import React, { useContext, useState } from "react";
import Classes from "./navbar.module.css";
import UZ_logo from "../Assets/UZ_logo.jpg";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className={Classes.navbar}>
      <div className={Classes.nav_logo}>
        <img src={UZ_logo} alt="logo" />
        <p>Marketplace</p>
      </div>
      <ul className={Classes.nav_menu}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu ==="shop"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu ==="mens"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
 
          <Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu ==="womens"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link> {menu ==="kids"?<hr/>:<></>}
        </li>
      </ul>
      <div className={Classes.cart}>
      {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
        
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className={Classes.nav_cart_count}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
