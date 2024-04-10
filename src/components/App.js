
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  // Function to handle button click
  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
        {/* Do not remove the main div */}
      <button onClick={handleButtonClick}>Click Me</button>
      <p>Button clicked {count} times.</p>
     
    </div>
  )
}

export default App
