
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [Mode, setMode] = useState('light');//whether dark mode is enabled or not.
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar Mode={Mode} toggleMode={toggleMode} />

      <div className="container my-3" >
        {/* <Switch> */}
        {/* <Route path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route path="/"> */}
        <TextForm heading="Enter the Text to Analyze Below" Mode={Mode} />

        {/* </Route> */}
        {/* </Switch> */}


      </div>
      {/* </Router> */}
    </>

  );
}

export default App;
