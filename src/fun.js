import { useState } from "react";

function Fun() {
  const [message, setMessage] = useState("Click the button!");

  const handleClick = () => {
    setMessage("Hello, React is fun! 🎉");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple React Program</h1>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Fun;
