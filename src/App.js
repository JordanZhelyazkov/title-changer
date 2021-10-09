import "./App.css";
import {useState, useEffect} from 'react';

function App() {
  let [seconds, setCount] = useState(1);

    
  useEffect(() => {
     document.title = `Count (${seconds})`
  }, [seconds]);

  return (
    
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title"> 
          <button onClick={() => setCount(seconds + 1)} >Count ({seconds})</button>
           </p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
