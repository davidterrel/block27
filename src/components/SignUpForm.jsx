import { useState } from "react";

export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
        const result = await response.json();
        console.log(result); setToken(result.token)
        try {
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    Username:
                </label>
                <label>
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}