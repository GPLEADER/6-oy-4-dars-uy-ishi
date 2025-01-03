import { useState } from "react";

function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !agreed) {
            setError("Iltimos barcha maydonlarni to'ldiring va shartlarga rozilik bildiring!");
            return;
        }

        alert("Forma muvaffaqiyatli yuborildi!");
        setName("");
        setEmail("");
        setAgreed(false);
        setError("");
    };

    return (
        <div>
            <h2>Foydalanuvchi Formasi</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="email"
                    placeholder="Emailingizni kiriting"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                    Shartlarga roziman
                </label>
                <br />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Yuborish</button>
            </form>
        </div>
    );
}

export default UserForm;
