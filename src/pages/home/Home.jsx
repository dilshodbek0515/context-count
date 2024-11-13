import React from 'react'
import { useStateValue } from '../../context'

const Home = () => {
    const [state, dispatch] = useStateValue()
    return (
        <div className='mt-20 w-[600px] h-[50px] mx-auto flex items-center justify-center text-blue-600'>
            <h2 className='text-7xl'> {state.count}</h2>
        </div>
    )
}

export default Home