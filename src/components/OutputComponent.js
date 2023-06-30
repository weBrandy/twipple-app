export default function OutputComponent({ tweet, onButtonClick }) {
    return (
      <div className="mt-4">
        <h3 className="text-2xl mb-2">Generated Tweet:</h3>
  
        {/* Text area for displaying generated tweet */}
        <textarea
          value={tweet}
          readOnly
          className="w-full h-32 p-2 border rounded-md"
        />
  <h5 className="text-2xl mb-2">Please use the below buttons to toggle hashtags and generate new version based whether you like the output or not.</h5>
  <h5 className="text-2xl mb-2">If you like the current output, Tweeple will sugges a NEW close match. If you don't, the app will try something completely new</h5>
        <div className="flex space-x-2 mt-4">
          <button onClick={() => onButtonClick('copyTweet')} className="btn">
            Copy
          </button>
          <button onClick={() => onButtonClick('toggleHashtags')} className="btn">
            Toggle Hashtags
          </button>
          <button onClick={() => onButtonClick('like')} className="btn">
            Thumb Up
          </button>
          <button onClick={() => onButtonClick('dislike')} className="btn">
            Thumb Down
          </button>
        </div>
      </div>
    );
  }