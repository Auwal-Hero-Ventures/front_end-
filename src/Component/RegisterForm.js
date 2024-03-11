import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'customer', // default role, can be changed based on user selection
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register/', userData);
            console.log('User registered:', response.data);
            // Handle success (e.g., redirect or clear form)
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="register-form-container">
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Role</label>
                <select name="role" value={userData.role} onChange={handleChange}>
                    <option value="customer">Customer</option>
                    <option value="agent">Agent</option>
                </select>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
