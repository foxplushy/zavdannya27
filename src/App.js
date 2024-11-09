import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const [blocks, setBlocks] = useState([{ blockNumber: 0, blockName: "noName" }]);
  const nameInputRef = useRef();

  function deleteBlock(blockNumber) {
    setBlocks((blocks) => blocks.filter(block => block.blockNumber !== blockNumber));
  }

  function addBlock() {
    const newBlockName = nameInputRef.current.value;
    if (newBlockName.trim() === "") return;

    setBlocks((blocks) => [
      ...blocks,
      { blockNumber: blocks.length, blockName: newBlockName }
    ]);
    nameInputRef.current.value = ""; 
  }

  function SecondBlock({ blockNumber, blockName }) {
    return (
      <div className="secondBlock">
        <h2>{blockName}</h2>
        <button className="deleteButton" onClick={() => deleteBlock(blockNumber)}>Delete</button>
      </div>
    );
  }

  return (
    <div className="All">
      <div className="StarterBlock">
        <h1>Start do your homework</h1>
        <input type="text" ref={nameInputRef} className="starterInput" />
        <button onClick={addBlock}>Add Block</button>
      </div>
      <div className="OtherBlocks">
        {blocks.map(block => (
          <SecondBlock blockNumber={block.blockNumber} blockName={block.blockName} />
        ))}
      </div>
    </div>
  );
}

export default App;
