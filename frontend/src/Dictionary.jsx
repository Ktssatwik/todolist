import React, { useState } from "react";
import "./Dictionary.css"; // import the CSS

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState(null);
  const [error, setError] = useState("");

  const searchWord = async () => {
    if (!word.trim()) return;

    try {
      setError("");
      setMeaning(null);

      const response = await fetch(
        `https://api.api-ninjas.com/v1/dictionary?word=${word}`,
        {
          headers: {
            "X-Api-Key": "oDoFTpsYrk/kQxru7qFAag==z3IIEZE5TBmM2Mzj"
          }
        }
      );

      if (!response.ok) {
        throw new Error("Word not found or API error.");
      }

      const data = await response.json();

      if (data.definition) {
        setMeaning(data);
      } else {
        setError("No definition found.");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="dictionary-container">
      <h1>📖 Simple Dictionary</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter a word..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchWord()}
        />
        <button onClick={searchWord}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {meaning && (
        <div className="meaning-card">
          <h2>{word}</h2>
          <p><strong>Definition:</strong> {meaning.definition}</p>
          <p><strong>Valid:</strong> {meaning.valid ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}
