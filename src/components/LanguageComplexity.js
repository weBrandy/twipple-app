export default function LanguageComplexity({ complexity, handleComplexityChange }) {
    return (
      <div className="mb-4">
      <h3 className="text-2xl mb-2">Language complexity:</h3>
      <h5 className="text-2xl mb-2">Simple tweets perform best. Yet, if you want it to be more complex, depending on your audience, you can do it here.</h5>  
    <div className="flex flex-col space-y-2"></div>
      <div className="flex flex-col space-y-2">
        {['Pre-School', 'School', 'High School', 'University', 'Doctorate'].map((placeholder, index) => (
          <label key={index} className="inline-flex items-center">
            <input
              type="radio"
              name="complexity"
              checked={complexity === placeholder}
              onChange={() => handleComplexityChange(placeholder)}
            />
            {placeholder}
          </label>
        ))}
      </div>
      </div>
    );
  }
  