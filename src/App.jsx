import { useState } from "react";
import Chat from "./components/Chat";
import MemoryForm from "./components/MemoryForm";
import RagQuery from "./components/RagQuery";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InfoTooltip from "./components/InfoTooltip";

function App() {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="container">
      <h1>RAG Memory Portal</h1>

      <div className="nav-buttons">
        <button
          className={activeTab === "chat" ? "active" : ""}
          onClick={() => setActiveTab("chat")}
        >
          Chat
          <InfoTooltip text="Send a prompt and receive a real-time AI chat response." />
        </button>
        <button
          className={activeTab === "memory" ? "active" : ""}
          onClick={() => setActiveTab("memory")}
        >
          Add Memory
          <InfoTooltip text="Save personal preference or profile info into Memory DB using AI embeddings." />
        </button>
        <button
          className={activeTab === "rag" ? "active" : ""}
          onClick={() => setActiveTab("rag")}
        >
          RAG Query
          <InfoTooltip text="Query stored memory using Retrieval Augmentation (semantic search)." />
        </button>
      </div>

      {activeTab === "chat" && <Chat />}
      {activeTab === "memory" && <MemoryForm />}
      {activeTab === "rag" && <RagQuery />}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;
