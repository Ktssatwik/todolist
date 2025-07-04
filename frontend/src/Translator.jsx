import React, { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [loading, setLoading] = useState(false);

  const languages = [
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "hi", name: "Hindi" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "ru", name: "Russian" },
    { code: "zh", name: "Chinese" }
  ];
    const translateText = async () => {
    if (!text || !targetLanguage) {
        alert("Please enter text and select a target language.");
        return;
    }
    try {
        setLoading(true);
        setTranslated("");
        const response = await fetch(
        `https://api.api-ninjas.com/v1/translate?text=${encodeURIComponent(
            text
        )}&language=${targetLanguage}`,
        {
            method: "GET",
            headers: {
            "X-Api-Key": "oDoFTpsYrk/kQxru7qFAag==z3IIEZE5TBmM2Mzj"
            }
        }
        );

        if (!response.ok) {
        throw new Error("API returned an error");
        }

        const data = await response.json();
        console.log("🚀 API response:", data);  // <-- see exactly what comes back

        if (data.translated_text) {
        setTranslated(data.translated_text);
        } else {
        alert("Translation failed: No translated_text field in response.");
        }
    } catch (error) {
        console.error("Error during translation:", error);
        alert("Translation failed.");
    } finally {
        setLoading(false);
    }
    };


  return (
    <div>
      <h2>Simple Translator</h2>
      <textarea
        rows="4"
        placeholder="Enter text to translate..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="">Select target language</option>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <br />
      <button onClick={translateText} disabled={loading}>
        {loading ? "Translating..." : "Translate"}
      </button>

      {translated && (
        <div>
          <h3>Translated Text:</h3>
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
}
