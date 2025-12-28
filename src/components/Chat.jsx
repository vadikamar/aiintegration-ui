import { useState } from "react";
import { askChat } from "../Api";

function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handleChat = async () => {
    if (!prompt) return;
    setLoading(true);    // Start spinner
    setResponse("");     // Clear previous response
    try {
      const res = await askChat(prompt);
      const message = res.data.data.choices[0].message.content;
      setResponse(message);
    } catch (err) {
      setResponse("Error: " + err.message);
    } finally {
      setLoading(false); // Stop spinner
    }
  };

  const handleClear = () => {
    setPrompt("");
    setResponse("");
  };

  return (
    <>
      <h2>AI Chat</h2>
      <div className="box">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask something..."
        />
        <div>
          <button onClick={handleChat}>Send</button>
          <button className="clear-btn" onClick={handleClear}>Clear</button>
        </div>

        {/* Spinner */}
        {loading && (
          <div className="spinner-container">
            <div className="spinner"></div>
            Please wait...
          </div>
        )}

        <div className="response">{response}</div>
      </div>
    </>
  );
}

export default Chat;
