import React from 'react'
import { useSelector } from 'react-redux'

function ComponentB() {
    const counter = useSelector((state) => state.counter.value)
    return (
        <div>
            THIS IS COUNTER = {counter}
        </div>
    )
}

export default ComponentB
