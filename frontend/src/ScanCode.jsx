import React, { useState } from "react";
import QRCode from "react-qr-code";

const ScanCode = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Code Generator</h1>
      <input 
    type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}/>
        <div>
            {text && <QRCode value={text} size={256} />}
        </div>
    </div>
  );
};

export default ScanCode;
