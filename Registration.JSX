import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(e.target);

    // You can extract the values here
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    // Perform validation, data processing, etc.
    onRegister(); // Notify the parent component that registration is successful
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <label htmlFor="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" required />

      <button type="submit">Register</button>
    </form>
  );
};

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true); // This can trigger a state change, affecting the UI
  };

  return (
    <div>
      {isRegistered ? (
        <h2>Welcome to the App!</h2> // Render something different upon registration
      ) : (
        <RegistrationForm onRegister={handleRegister} /> // Display the registration form
      )}
    </div>
  );
};

export default App;
