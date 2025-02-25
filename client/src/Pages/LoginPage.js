import React from 'react';
import Login from '../Components/Login';

const LoginPage = ({ onLogin }) => {
    return (
        <div>
            <h1>Login</h1>
            <Login onLogin={onLogin} />
        </div>
    );
};

export default LoginPage;
