export default function ContentPillars({ pillars, handlePillarsChange }) {
    return (
      <div className="mb-4">
        <h3 className="text-2xl mb-2">Desired content pillars:</h3>
        <h5 className="text-2xl mb-2">Twipple will combine the voice of your best-performing tweets with content pillars you choose to generate.</h5>
  
        <div className="flex flex-wrap">
  {pillars.map((pillar, index) => (
    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex">
      <input
        type="text"
        placeholder="Enter Pillar"
        className="py-2 px-4 w-full shadow rounded mb-2"
        value={pillar}
        onChange={(e) => handlePillarsChange(index, e)}
      />
    </div>
  ))}
</div></div>
    );
  }