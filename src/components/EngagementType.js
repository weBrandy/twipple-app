export default function EngagementType({ engagementType, handleEngagementType }) {
    return (
        <div className="mb-4">
        <h3 className="text-2xl mb-2">Desired engagement type:</h3>
        <h5 className="text-2xl mb-2">Twipple will generate tweets with the type of engagement you choose. You can select more than one.</h5>  
      <div className="flex flex-col space-y-2"></div>
        {['Educational', 'Entertaining', 'Inspiring'].map((placeholder, index) => (
          <label key={index} className="inline-flex items-center">
            <input
              type="checkbox"
              checked={engagementType[index]}
              onChange={() => handleEngagementType(index)}
            />
            {placeholder}
          </label>
        ))}
      </div>
    );
  }
  