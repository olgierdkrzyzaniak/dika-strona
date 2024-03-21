import React from "react";

function CopyToClipboard({ content, children }) {
  return (
    <button onClick={() => navigator.clipboard.writeText(content)}>
      {children}
    </button>
  );
}

export default CopyToClipboard;
