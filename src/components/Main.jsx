import React, { useEffect, useRef, useState } from 'react'
import Products from './Products'

const Main = () => {
    const [username, setUsername] = useState("")
    const passwordEl = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        const user = {
            username,
            password: passwordEl.current.value
        }
            console.log(user);

    }
    return (
        <div>
            <h2>Main</h2>
            <form onSubmit={handleSubmit} action="">
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
                <input ref={passwordEl} type="password" />
                <button>Click</button>
            </form>
            <Products />
        </div>
    )
}

export default Main