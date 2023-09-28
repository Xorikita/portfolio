import React, { useState } from "react";
import s from "./Layout.module.css"
import Header from "./Header/Header";
import Body from "./Body/Body";
import { MenuContext } from "../../contexts/MenuContext";
import MenuButton from "../Buttons/MenuButton/MenuButton";

export default function Layout(){
    const [menu, setMenu] = useState(false)
    return(
        <MenuContext.Provider value={[menu, setMenu]}>
            <div className={menu? `${s.layout} ${s.menu_mode}`: s.layout}>
                <div className={s.header}>
                    <Header>
                        <MenuButton menu={menu} setMenu={setMenu}/>
                    </Header>
                </div>
                <div className={s.body}><Body/></div>
                <div className={s.footer}></div>
            </div>
        </MenuContext.Provider>
    )
}