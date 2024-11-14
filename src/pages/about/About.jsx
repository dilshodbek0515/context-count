import React from 'react'
import { useStateValue } from '../../context'

const About = () => {
    const [state, dispatch] = useStateValue()

    return (
        <>
            <button
                className='w-[220px] h-[80px] rounded-3xl mx-auto flex items-center justify-center text-3xl mt-16 border bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:transition duration-300'
                onClick={() => dispatch({ type: "INC", payload: 1 })}>Increment
            </button>
            <button
                className='w-[220px] h-[80px] rounded-3xl mx-auto flex items-center justify-center text-3xl mt-10 border bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:transition duration-300'
                onClick={() => dispatch({ type: "DEC", payload: 1 })}>Decrement
            </button>


        </ >
    )
}

export default About