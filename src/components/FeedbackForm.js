import React, { useState } from 'react';
import { db } from '../firebase/config'; // Import Firebase configuration
import './FeedbackForm.css';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('feedback').add({
        name,
        email,
        feedback,
        timestamp: new Date(),
      });
      setConfirmationMessage('Feedback submitted successfully!');
      setName('');
      setEmail('');
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback: ', error);
    }
  };

  return (
    <div className='feedback-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='feedback'>Feedback:</label>
          <textarea
            className='form-control'
            id='feedback'
            rows='4'
            placeholder='Enter your feedback'
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
      {confirmationMessage && <p className='confirmation-message'>{confirmationMessage}</p>}
    </div>
  );
}

export default FeedbackForm;