/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import s from "./MenuButton.module.css"

export default function MenuButton({menu, setMenu}){
    return(
        <a className={`${s.button} ${menu? s.active: ''}`} onClick={() => setMenu(!menu)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </a>
    )
}