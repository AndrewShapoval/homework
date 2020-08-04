import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import n from './Navbar.module.css'

const NavBar = () => {

    const [active, setActive] = useState(false)
    let onClick = () => {
        setActive(!active)
    }

    return (
        <div>
            <div className={n.toggle} onClick={onClick}>Всплывашка</div>
            {
                !active
                    ? <div></div>
                    : <nav className={n.wrapper}>
                        <div className={n.item}>
                            <NavLink to='/PreJunior' activeClassName={n.active}>PreJunior</NavLink>
                        </div>
                        <div className={n.item}>
                            <NavLink to='/Junior' activeClassName={n.active}>Junior</NavLink>
                        </div>
                        <div className={n.item}>
                            <NavLink to='/Junior+' activeClassName={n.active}>Junior+</NavLink>
                        </div>
                    </nav>}
        </div>
    )
}

export default NavBar;