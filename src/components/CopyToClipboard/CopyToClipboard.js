"use client";
import React from "react";
import styles from "./CopyToClipboard.module.css";

function CopyToClipboard({ content, children }) {
  const [coppied, setCopied] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState(null);
  const handleClick = () => {
    clearTimeout(timeoutId);
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeoutId(
      setTimeout(() => {
        setCopied(false);
      }, 2000)
    );
  };
  return (
    <button className={styles.Button} onClick={handleClick}>
      {children}
      <p className={styles.Text}>
        {coppied ? "(Skopiowano!)" : "(Kliknij aby skopiować kontakt.)"}
      </p>
    </button>
  );
}

export default CopyToClipboard;
