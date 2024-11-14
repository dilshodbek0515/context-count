import "./Pages.scss"
import { useReducer } from 'react'
import { inititalState, reducer } from '../context/reducer'
import { IoSunnyOutline } from "react-icons/io5";
import About from "./about/About"
import Home from './home/Home'

const Pages = () => {
    const [state, dispatch] = useReducer(reducer, inititalState)
    return (
        <div className={`pages ${state.theme ? "dark" : ""}`}>
            <button onClick={() => {
                dispatch({ type: "TOGGLE_THEME" });
                console.log("Theme holati:", state.theme);
            }}>
                <IoSunnyOutline className="d_m" />
            </button>
            <Home />
            <About />
        </div >
    )
}

export default Pages