import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(null);

    const handleAddition = () => setResult(num1 + num2);
    const handleMultiplication = () => setResult(num1 * num2);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Kalkulyator</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                placeholder="1-son"
            />
            <br />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                placeholder="2-son"
            />
            <br />
            <button onClick={handleAddition}>Yig'indini hisoblash</button>
            <button onClick={handleMultiplication}>Ko'paytmani hisoblash</button>
            <h2>Natija: {result !== null ? result : '...'}</h2>
        </div>
    );
}

export default Calculator;
