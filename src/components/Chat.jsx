import { useState } from "react";
import { askChat } from "../Api";

function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleChat = async () => {
    try {
      const res = await askChat(prompt);
      const message = res.data.data.choices[0].message.content;
      setResponse(message);
    } catch (err) {
      setResponse("Error: " + err.message);
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
        <div className="response">{response}</div>
      </div>
    </>
  );
}

export default Chat;
