import React, { Component } from 'react';
import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Toolbar />
          <main style={{marginTop: '64px'}}>
            <h1>Welcome</h1>
            <p>Help me, Obi-Wan Kenobi. You’re my only hope.</p>
            <p>I find your lack of faith disturbing.</p>
            <p>It’s the ship that made the Kessel run in less than twelve parsecs. 
              I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. 
              I’m talking about the big Corellian ships, now. She’s fast enough for you, 
              old man.</p>
            <p>Why, you stuck-up, half-witted, scruffy-looking nerf herder!</p>
            <p>Do. Or do not. There is no try.</p>
            <p>Now, young Skywalker, you will die.</p>
            <p>Well, if droids could think, there’d be none of us here, would there?</p>
            <p>The dark side of the Force is a pathway to many abilities some consider to be unnatural.</p>
            <p>You were my brother, Anakin. I loved you.</p>
            <p>Power! Unlimited power!</p>
         </main>
      </div>
    );
  }
}

export default App;






