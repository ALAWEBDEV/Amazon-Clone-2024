import React from 'react'
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import Lower from "./Lower";

function Header() {
  return (
    <section className={classes.fixed}>
    <div className={classes.header__container}>
      {/* logo section */}
      <div className={classes.logo__container}>
         <a href="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon logo"
          />
        </a>
        <div className={classes.delivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>
      </div>
      {/*serach section  */}
      <div className={classes.search}>
        <select name="" id="">
          <option value=""> All</option>
        </select>
        <input type="text" />{" "}
        {/* <input type="test" name="" id="" placeholder="search product"  />     */}
        <BsSearch size={38} />
      </div>
      {/* other section */}
      <div className={classes.order__container}>
         <a href="" className={classes.language}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
            alt=""
          />

          <select name="" id="">
            <option value=""> EN</option>
          </select>
          </a>
         <a href="">
          <div>
           <p>sign in</p>
           <span>Account & Lists</span>
          </div>
          {/* <span>Account & Lists</span>  */}
        </a>
        <a href="">
          <p>Returns</p>
          <span>& Orders</span>
        </a>
        <a href="" className={classes.cart}>
        <BiCart size={35} />
          <span>0</span>
          </a>
      </div>
    </div>
    <Lower />
   </section>
   
   
  )
}

export default Header


