import React, { useState } from 'react';

function PersonalForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ firstName, lastName, birthDate, gender });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ism" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <br />
            <input type="text" placeholder="Familiya" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            <br />
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
            <br />
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Tanlang</option>
                <option value="male">Erkak</option>
                <option value="female">Ayol</option>
            </select>
            <br />
            <button type="submit">Yuborish</button>
        </form>
    );
}

export default PersonalForm;
