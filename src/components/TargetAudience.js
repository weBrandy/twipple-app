import React from 'react';
import PropTypes from 'prop-types';

export default function TargetAudience({ targetAudience, handleTargetAudienceChange }) {
  return (
    <div className="mb-4">
      <h3 className="text-2xl mb-2">Your target audience:</h3>
      <h5 className="text-2xl mb-2">Twipple will generate content that will be most appealing for the target audience you choose.</h5>

      <input
        className="border-2 border-gray-300 p-2 w-full"
        type="text"
        placeholder="Target Audience"
        value={targetAudience}
        onChange={(e) => handleTargetAudienceChange(e.target.value)}
      />
    </div>
  );
}

TargetAudience.propTypes = {
  targetAudience: PropTypes.string.isRequired,
  handleTargetAudienceChange: PropTypes.func.isRequired,
};
