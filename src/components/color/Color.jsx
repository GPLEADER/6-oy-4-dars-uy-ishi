import React from 'react'
import { useState } from 'react'

function Color() {
    const [bgColor, setBgColor] = useState('#ffffff');
    return (
        <div style={{ backgroundColor: bgColor, height: '50vh' }}>
            <input
                type="color"
                onChange={(e) => setBgColor(e.target.value)}
            />
        </div>
    )
}

export default Color