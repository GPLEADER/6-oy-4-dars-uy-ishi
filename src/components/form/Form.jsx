import { useState } from "react"
import React from 'react'

function Form() {

    const [names, setNames] = useState([])

    const handleClick = () => {
        const input = document.getElementById('inputName')
        const inpValue = input.value.trim()
        let copied = [...names]
        copied.push(inpValue)
        setNames(copied)
        if (inpValue) {
            setNames([...names, inpValue])
            input.value = ''
        }
    }

    const resBtn = () => {
        setNames([])
    }



    return (
        <div>
            <form>
                <input id='inputName' type="text" placeholder='Ism kiriting...' />
                <button type='button' onClick={handleClick}>Yuborish</button>
            </form>

            <button onClick={resBtn}>Reset</button>

            <ul>
                {
                    names.map((name, index) => {
                        return <li key={index}>{name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Form