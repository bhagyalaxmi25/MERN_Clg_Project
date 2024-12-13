import { useRef, useEffect, useState } from 'react';
import "./App.css";

function App() {
  const cmRef = useRef(null);
  const inchesRef = useRef(null);
  const [cm, setCm] = useState(0.0);
  const [inches, setInches] = useState(0.0);

  const cmChange = (event) => {
    setCm(event.target.value);
  }
  const inchesChange = (event) => {
    setInches(event.target.value);
  }

  useEffect (() => {
    if(document.activeElement === cmRef.current){
      setInches(cm / 2.54);
    }else if(document.activeElement === inchesRef.current){
      setCm(inches * 2.54);
    }
  }, [inches, cm]);
  
  return (
    <>
    <div>
      CM : <input type='number' value={cm} onChange={cmChange} step={0.01} ref={cmRef}/>
      <br/>
      Inches : <input type='number' value={inches} onChange={inchesChange} step={0.01} ref={inchesRef}/>
    </div>
    </>
  )
}

export default App
