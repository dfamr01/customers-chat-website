import { useState } from "react";

function Click() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((current) => current + 1)}>
      click {count}
    </button>
  );
}
export default Click;
