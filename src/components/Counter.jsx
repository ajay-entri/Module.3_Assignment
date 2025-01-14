import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const add = () => {
        setCounter(counter + 1)
    }
    const sub = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <button>+</button>
            Value:{counter}
            <button>-</button>

        </div>
    )
}

export default Counter
