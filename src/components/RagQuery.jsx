import { useState } from "react";
import { ragQuery } from "../Api";

function RagQuery() {
  const [text, setText] = useState("");
  const [ans, setAns] = useState("");

  const handleQuery = async () => {
    try {
      const res = await ragQuery(text);
      setAns(res.data.data);
    } catch (err) {
      setAns("Error: " + err.message);
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
          <button onClick={handleQuery}>Run</button>
          <button className="clear-btn" onClick={handleClear}>Clear</button>
        </div>
        <div className="response">{ans}</div>
      </div>
    </>
  );
}

export default RagQuery;
