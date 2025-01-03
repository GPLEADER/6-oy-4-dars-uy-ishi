import { useState } from "react";
import React from "react";

function Password() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <form>
                <label>Parol kiriting:</label>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Parol kiriting"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        Show Password
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Password;
