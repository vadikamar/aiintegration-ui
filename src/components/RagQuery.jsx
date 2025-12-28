import { useState } from "react";
import { ragQuery } from "../Api";

function RagQuery() {
  const [text, setText] = useState("");
  const [ans, setAns] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handleQuery = async () => {
    if (!text) return;
    setLoading(true);   // start spinner
    setAns("");         // clear previous answer
    try {
      const res = await ragQuery(text);
      setAns(res.data.data);
    } catch (err) {
      setAns("Error: " + err.message);
    } finally {
      setLoading(false); // stop spinner
    }
  };

  const handleClear = () => {
    setText("");
    setAns("");
  };

  return (
    <>
      <h2>RAG Query</h2>
      <div className="box">
        <input
          placeholder="Enter query"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <button onClick={handleQuery} disabled={loading}>Run</button>
          <button className="clear-btn" onClick={handleClear} disabled={loading}>Clear</button>
        </div>

        {/* Spinner */}
        {loading && (
          <div className="spinner-container">
            <div className="spinner"></div>
            Please wait...
          </div>
        )}

        <div className="response">{ans}</div>
      </div>
    </>
  );
}

export default RagQuery;
