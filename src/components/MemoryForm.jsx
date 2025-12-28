import { useState } from "react";
import { addMemory } from "../Api";
import { toast } from "react-toastify";

function MemoryForm() {
  const [type, setType] = useState("");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const handleSave = async () => {
    try {
      await addMemory({ type, key, value });
      toast.success("Memory Saved Successfully!");
      handleClear();
    } catch {
      toast.error("Failed to Save Memory");
    }
  };

  const handleClear = () => {
    setType("");
    setKey("");
    setValue("");
  };

  return (
    <>
      <h2>Add Memory</h2>
      <div className="box">
        <input placeholder="Type, Example:- Personal Preference" value={type} onChange={(e) => setType(e.target.value)} />
        <input placeholder="Key, Example:- What sport I like?" value={key} onChange={(e) => setKey(e.target.value)} />
        <input placeholder="Value, Example:- I like cricket" value={value} onChange={(e) => setValue(e.target.value)} />
        
        <div>
          <button onClick={handleSave}>Save</button>
          <button className="clear-btn" onClick={handleClear}>Clear</button>
        </div>
      </div>
    </>
  );
}

export default MemoryForm;
