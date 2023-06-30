export default function Length({ length, handleLengthChange }) {
    return (
        <div className="mb-4">
        <h3 className="text-2xl mb-2">Tweet length:</h3>
        <h5 className="text-2xl mb-2">Choose Long for a standard tweet and Huge for a 2000-4000 character long tweet.</h5>  
      <div className="flex flex-col space-y-2"></div>
      <div className="flex flex-col space-y-2">
        {['Short', 'Medium', 'Long', 'Huge'].map((placeholder, index) => (
          <label key={index} className="inline-flex items-center">
            <input
              type="radio"
              name="length"
              checked={length === placeholder}
              onChange={() => handleLengthChange(placeholder)}
            />
            {placeholder}
          </label>
        ))}
      </div>
      </div>
    );
  }
  