import style from "../styles/menue.module.css"
import React from 'react'

function menue() {
  return (
    <nav className={style.navbar}>
       <div className='logo'>Logo</div>
       <ul className={style.nav}>
       <li className={style.navItem}> <a className={style.navLink}>Iphone 15 Pro</a></li>
       <li className={style.navItem}> <a className={style.navLink}>Iphone 15 Pro Max</a></li>
       <li className={style.navItem}> <a className={style.navLink}>Samsung S24 </a></li>
       <li className={style.navItem}> <a className={style.navLink}>Galaxy Z-Flip</a></li>
       <li className={style.navItem}> <a className={style.navLink}>Galaxy Z Fold</a></li>
       <button className={style.navBurger}>hello</button>
       <span className={style.burgerBar}>.</span>
       </ul>
    </nav>
  )
}

export default menue

