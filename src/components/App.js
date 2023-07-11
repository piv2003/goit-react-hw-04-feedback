import { useState } from 'react';
import { FeedbackOptions } from 'components/Feedback';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['Good', 'Neutral', 'Bad'];
  const sumFeedback = good + neutral + bad;

  function onLeaveFeedback(evt) {
    switch (evt.target.textContent) {
      case 'Good':
        setGood(prev => prev + 1);
        break;
      case 'Neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'Bad':
        setBad(prev => prev + 1);
        break;
      default:
        console.log('Something wrong');
        return;
    }
  }

  function countPositiveFeedbackPercentage() {
    if (sumFeedback === 0) return 0;
    const totalFeedback = (good / sumFeedback) * 100;
    return Math.round(totalFeedback);
  }

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={sumFeedback}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}
