import React, { useState } from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Contact Us</h2>
                
                <div className="contact-info">
                    <p className="contact-description">
                        For inquiries, please reach out to us at:
                    </p>
                    <p className="contact-email">Email: support@aptechhub.com</p>
                    <p className="contact-phone">Phone: (123) 456-7890</p>
                </div>

                <h3 className="login-title">Login to Your Account</h3>
                
                <LoginForm /> 
            </div>
        </section>
    );
};


const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [promptMessage, setPromptMessage] = useState("");

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessage(true);
        if (isLogin) {
            setPromptMessage("Welcome back! You're successfully logged in.");
        } else {
            setPromptMessage("Thank you for signing up! Your account has been created.");
        }

        
        setTimeout(() => {
            setShowMessage(false);
        }, 5000);
    };

    return (
        <section id="login" className="login-section">
            <div className="login-card">
                <h2>{isLogin ? "Login" : "Sign Up"}</h2>
                <form onSubmit={handleSubmit} className="form-container">
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="Enter your full name" required />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="submit-btn">
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                    <p onClick={toggleForm} className="toggle-link">
                        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                    </p>
                </form>

                {showMessage && (
                    <div className="prompt-message">
                        {promptMessage}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;
