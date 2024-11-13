import React from 'react'
import { useStateValue } from '../../context'

const About = () => {
    const [state, dispatch] = useStateValue()

    return (
        <div>
            <button
                className='w-[300px] h-[100px] rounded-3xl mx-auto flex items-center justify-center text-5xl mt-16 border bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:transition duration-300'
                onClick={() => dispatch({ type: "INC", payload: 1 })}>Increment
            </button>
            <button
                className='w-[300px] h-[100px] rounded-3xl mx-auto flex items-center justify-center text-5xl mt-16 border bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:transition duration-300'
                onClick={() => dispatch({ type: "INC", payload: 10 })}>Increment
            </button>
            <button
                className='w-[300px] h-[100px] rounded-3xl mx-auto flex items-center justify-center text-5xl mt-16 border bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:transition duration-300'
                onClick={() => dispatch({ type: "INC", payload: 100 })}>Increment
            </button>
        </div >
    )
}

export default About