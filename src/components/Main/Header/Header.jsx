import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../contexts/MenuContext";
import s from "./Header.module.css"
import { Link } from "react-router-dom";
import menu_data from "../../../routes/routes";
import { useLocation } from "react-router-dom";

export default function Header({children}){
    const [menu, setMenu] = useContext(MenuContext)
    const location = useLocation()
    let current = menu_data.map(item => item.url).indexOf(location.pathname)
    const [next, setNext] = useState(current+1 < menu_data.length? menu_data[current+1].url: menu_data[0].url)
    const [prev, setPrev] = useState(current-1 >= 0? menu_data[current-1].url: menu_data[menu_data.length-1].url)

    useEffect(() => {
        let current = menu_data.map(item => item.url).indexOf(location.pathname)
        setNext(current+1 < menu_data.length? menu_data[current+1].url: '')
        setPrev(current-1 >= 0? menu_data[current-1].url: menu_data[menu_data.length-1].url)
    }, [location])
    return(
        <header className={s.header}>
            <menu className={`${s.menu} ${menu? s.open: ''}`}>
                {menu_data?.map(item => {
                    return(
                        <Link className={item.url === location.pathname? s.active_link: ''} to={item.url}>{item.title}</Link>
                    )
                })}
            </menu>
            <div className={s.controls}>
                <Link className={s.arrow} to={prev}>&and;</Link>
                <Link className={s.arrow} to={next}>&or;</Link>
            </div>
            {children}
        </header>
    )
}