import { Statistics } from './Feedback/Statistics.js';
import { Notification } from './Feedback/Notification.js';
import { FeedbackOptions } from './Feedback/FeedbackOptions.js';
import { Section } from './Feedback/Section.js';
import React, { useState } from 'react';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonFeedback = option => {
    if (option === 'good') return setGood(good + 1);
    if (option === 'neutral') return setNeutral(neutral + 1);
    if (option === 'bad') return setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    total > 0 ? Math.round((good / total) * 100) : 0;

  const dataAvailable = !!countPositiveFeedbackPercentage;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <Section title={'Please leave feedback'} />
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={option => buttonFeedback(option)}
        />
        {dataAvailable && (
          <Statistics
            data={({ good }, { neutral }, { bad })}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
        {!dataAvailable && <Notification message={'There is no feedback'} />}
      </div>
    </div>
  );
};
