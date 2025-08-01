import React, { useState } from "react";

export default function AppGenie() {
  const [idea, setIdea] = useState("");
  const [generating, setGenerating] = useState(false);
  const [code, setCode] = useState("");

  const handleGenerate = () => {
    setGenerating(true);
    setCode("Generating app code...\n\n(This would be replaced with AI-generated code based on your input.)");

    setTimeout(() => {
      setCode(`// Example App Code

import React from 'react';

export default function MyApp() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Your AI-Generated App</h1>
      <p>Idea: ${idea}</p>
    </div>
  );
}`);
      setGenerating(false);
    }, 2000);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>⚡ AppGenie</h1>
      <p style={{ textAlign: "center", color: "#666" }}>
        Describe your app idea, and let AI generate it.
      </p>

      <textarea
        rows={5}
        placeholder="Describe the app you want (e.g., 'A to-do list with calendar sync')"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        style={{ width: "100%", padding: 10, marginTop: 20 }}
      />

      <button
        onClick={handleGenerate}
        disabled={generating || !idea.trim()}
        style={{
          marginTop: 10,
          width: "100%",
          padding: 10,
          fontWeight: "bold",
          backgroundColor: generating || !idea.trim() ? "#ccc" : "#0070f3",
          color: "white",
          border: "none",
          cursor: generating || !idea.trim() ? "not-allowed" : "pointer",
        }}
      >
        {generating ? "Generating..." : "Generate My App"}
      </button>

      {code && (
        <pre
          style={{
            backgroundColor: "#111",
            color: "#eee",
            padding: 10,
            marginTop: 20,
            whiteSpace: "pre-wrap",
            borderRadius: 5,
          }}
        >
          {code}
        </pre>
      )}
    </div>
  );
}
