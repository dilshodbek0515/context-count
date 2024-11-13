import React, { useReducer } from 'react'
import { reducer, inititalState } from './reducer';


const Hero = () => {
    const [state, dispatch] = useReducer(reducer, inititalState)
    console.log(state);

    return (
        <div>
            <h2>Hero {state.count}</h2>
            <button onClick={() => dispatch({ type: "INC", payload: 1 })}>Increment 1</button>
            <button onClick={() => dispatch({ type: "INC", payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: "INC", payload: 100 })}>Increment 100</button>
            <button onClick={() => dispatch({ type: "DEC" })} >Decrement</button>
            <button onClick={() => dispatch({ type: "TOGGLE" })}>Toggle</button>

            {
                state.bool &&
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempore!</p>
            }
        </div >
    )
}

export default Hero