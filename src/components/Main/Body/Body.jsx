import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Routes, Route } from "react-router";
import s from "./Body.module.css"
import menu_data from "../../../routes/routes";

export default function Body(){
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("");

    useEffect(() => {
        if (location !== displayLocation){
            let current = menu_data.map(item => item.url).indexOf(location.pathname)
            let next = menu_data.map(item => item.url).indexOf(displayLocation.pathname)
            setTransistionStage(next < current? "fadeOutT" : "fadeOutB");
        } 
    }, [location, displayLocation]);

    return (
        <div
        className={s[transitionStage]}
        style={{width: '100%', height: '100%'}}
        onAnimationEnd={() => {
            if (transitionStage === "fadeOutB") {
            setTransistionStage("fadeInB");
            setDisplayLocation(location);
            }
            if(transitionStage === "fadeOutT"){
            setTransistionStage("fadeInT");
            setDisplayLocation(location);
            }
        }}
        >
        <Routes location={displayLocation}>
            {menu_data?.map(item => {
                return(
                    <Route path={item.url} element={item.element} />
                )
            })}
        </Routes>
        </div>
    );
}