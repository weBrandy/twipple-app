import { useState } from "react";
import ContentPillars from './ContentPillars';
import EngagementType from './EngagementType';
import TargetAudience from './TargetAudience';
import Sentiment from './Sentiment';
import Length from './Length';
import LanguageComplexity from './LanguageComplexity';
import OutputComponent from './OutputComponent';

export default function TweetGeneratorForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pillars, setPillars] = useState(["", "", ""]);
  const [engagementType, setEngagementType] = useState([false, false, false]);
  const [targetAudience, setTargetAudience] = useState("");
  const [sentiment, setSentiment] = useState([false, false, false, false, false, false]);
  const [length, setLength] = useState("");
  const [complexity, setComplexity] = useState("");
  const [tweet, setTweet] = useState("");

  const handleLogin = () => {
    // TODO: Implement your login logic here.
    // This could be calling an OAuth service, 
    // calling your backend which returns a token, etc.
    // Once user is authenticated, you can set isLoggedIn state to true:
    setIsLoggedIn(true);
  };

// Pillars change handler
const handlePillarsChange = (index, event) => {
    const newPillars = [...pillars];
    newPillars[index].mainPillar = event.target.value;
    setPillars(newPillars);
  };

  const handleEngagementTypeChange = (index) => {
    const newEngagementType = [...EngagementType];
    newEngagementType[index] = !newEngagementType[index];
    setEngagementType(newEngagementType);
  };
  
  const handleSentimentChange = (index) => {
    const newSentiment = [...sentiment];
    newSentiment[index] = !newSentiment[index];
    setSentiment(newSentiment);
  };

  const handleTargetAudienceChange = (event) => {
    setTargetAudience(event.target.value);
  };
  
  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };
  
  const handleComplexityChange = (event) => {
    setComplexity(event.target.value);
  };
  
  const setGeneratedTweet = (generatedTweet) => {
    setTweet(generatedTweet);
  };
  
  const handleButtonsClick = (buttonType) => {
    switch (buttonType) {
      case 'copyTweet':
        // Implement copy tweet functionality
        break;
      case 'toggleHashtags':
        // Implement toggle hashtags functionality
        break;
      case 'like':
        // Implement like functionality
        break;
      case 'dislike':
        // Implement dislike functionality
        break;
      default:
        console.log(`Button type "${buttonType}" is not recognized.`);
    }
  };

  return (
    <div className={`h-screen bg-white ${isLoggedIn ? "" : "filter blur-sm"}`}>
      <div className="p-10">
        <h2 className="text-4xl mb-4">Welcome to Tweeple App</h2>
        <h4 className="text-4xl mb-4">This simple app will help you quickly generate tweets based upon your tweet history and parameters you feed into it below.</h4>

        {!isLoggedIn && (
          <button
            className="mb-4 py-2 px-4 rounded bg-blue-500 text-white"
            onClick={handleLogin}
          >
            Login with Twitter to Begin
          </button>
        )}

        <ContentPillars pillars={pillars} handlePillarsChange={handlePillarsChange} />
        <EngagementType engagementType={engagementType} handleEngagementTypeChange={handleEngagementTypeChange} />
        <TargetAudience targetAudience={targetAudience} handleTargetAudienceChange={handleTargetAudienceChange} />
        <Sentiment sentiment={sentiment} handleSentimentChange={handleSentimentChange} />
        <Length length={length} handleLengthChange={handleLengthChange} />
        <LanguageComplexity complexity={complexity} handleComplexityChange={handleComplexityChange} />
        <OutputComponent tweet={tweet} onButtonClick={handleButtonsClick} />
      </div>
    </div>
  );
}
