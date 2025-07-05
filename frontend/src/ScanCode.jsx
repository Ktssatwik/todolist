import React, { useState,useEffect } from "react";
import QRCode from "react-qr-code";
import "./ScanCode.css";
const ScanCode = () => {
  const [text, setText] = useState("");
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    if (text) { 
       const timer = setTimeout(() => setShowQr(true), 100);
       return () => clearTimeout(timer);
    } else {
      setShowQr(false); 
    }
  }, [text]);
  return (
    <div className="scan-code-container">
      <h1 className="scan-code-heading">QR Code Generator</h1>
      <input
      className="qr-input"
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
     {showQr && (<div className="qr-code-display"> <QRCode value={text} size={256} /></div>)}
    </div>
  );
};

export default ScanCode;
