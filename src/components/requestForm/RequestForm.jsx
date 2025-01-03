import { useState } from "react";
import React from "react";

function RequestForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            setError("Iltimos barcha maydonlarni to'ldiring!");
            return;
        }

        alert("Forma muvaffaqiyatli yuborildi!");
        setName("");
        setEmail("");
        setPhone("");
        setError("");
    };

    return (
        <div>
            <h2>Foydalanuvchi Formasi</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ism:</label>
                    <input
                        type="text"
                        placeholder="Ismingizni kiriting"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Emailingizni kiriting"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Telefon raqam:</label>
                    <input
                        type="tel"
                        placeholder="Telefon raqamingizni kiriting"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit">Yuborish</button>
            </form>
        </div>
    );
}

export default RequestForm;
