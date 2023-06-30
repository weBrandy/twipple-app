import React from 'react';
import PropTypes from 'prop-types';

export default function Sentiment({ sentiment, handleSentimentChange }) {
  return (
    <div className="mb-4">
      <h3 className="text-2xl mb-2">Desired sentiment:</h3>
      <h5 className="text-2xl mb-2">Choose how you want your new tweet to come across. You can select more than one.</h5>

      <div className="flex flex-col space-y-2">
        {['Positive', 'Neutral', 'Negative', 'Empathetic', 'Humorous', 'Serious'].map((placeholder, index) => (
          <label key={index} className="inline-flex items-center">
            <input
              type="checkbox"
              checked={sentiment[index]}
              onChange={() => handleSentimentChange(index)}
            />
            {placeholder}
          </label>
        ))}
      </div>
    </div>
  );
}

Sentiment.propTypes = {
  sentiment: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleSentimentChange: PropTypes.func.isRequired,
};
