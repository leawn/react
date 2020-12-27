import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { TweenMax, Power3 } from "gsap";

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  useEffect(() => {
    TweenMax.to(logoItem, .8, {opacity: 1, y: -20, ease: Power3.easeOut});
    TweenMax.to(textItem, .8, {opacity: 1, y: -20, ease: Power3.easeOut, delay: .2})
  }, []);

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
