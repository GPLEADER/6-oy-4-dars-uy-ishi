import { useState } from "react";
import React from "react";

function SecondForm() {
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        const inpValue = inputValue.trim();
        if (inpValue) {
            const reversedName = inpValue.split("").reverse().join("");
            setNames([...names, reversedName]);
            setInputValue("");
        }
    };

    const resBtn = () => {
        setNames([]);
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Ism kiriting..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="button" onClick={handleClick}>
                    Yuborish
                </button>
            </form>

            <button onClick={resBtn}>Reset</button>

            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SecondForm;
