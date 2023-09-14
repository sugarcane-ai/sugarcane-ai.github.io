import React, { useState } from 'react';

const host = 'https://serverless-email-signup-form.hi-c63.workers.dev'
// const host = 'http://0.0.0.0:8787'

const SignupForm = () => {
  const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object with email and name
    const data = {
      email,
    //   name,
    };

    try {
      // Make a POST request to the API endpoint
      const response = await fetch(`${host}/api/email-signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        // Submission was successful
        setSuccess(true);
      } else {
        // Handle other response statuses or errors here
        console.error('Submission failed.');
      }
    } catch (error) {
      // Handle network or other errors here
      console.error('Error:', error);
    }
  };

  if (success) {
    return (
      <div>
        <p>Details have been submitted successfully!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {/* <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div> */}
      <button type="submit">Join Waitlist</button>
    </form>
  );
};

export default SignupForm;
