import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config'; // Adjust the import based on your Firebase setup
import './FeedbackList.css';

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await db.ref('feedbacks').once('value'); // Adjust the path based on your Firebase structure
      const data = response.val();
      const feedbackArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setFeedbacks(feedbackArray);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className='feedback-list'>
      <h2>Feedback Entries</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <ul>
          {feedbacks.map(feedback => (
            <li key={feedback.id}>
              <strong>{feedback.name}</strong>: {feedback.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackList;