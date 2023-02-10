import React, { useState } from "react";

import TeamRouter from "./TeamRouter";

function App() {
      const [clicked, setClicked] = useState(false);
      const [team, setTeam] = useState('');

      const [playMusic, setPlayMusic] = useState(false);

      if (playMusic) {
  
            const song = new Audio("../sounds/supermassiveblackhole-muse.mp3");
            
            song.volume = 0.2;
            
            song.play();
            
            song.addEventListener('ended', function() {
                  this.currentTime = 0;
                  this.play();
            }, false);

      }

      function handleEdwardClick() {
            setClicked(true);
            setTeam('edward');
      }

      function handleJacobClick() {
            setClicked(true);
            setTeam('jacob');
      }

      if (!clicked) {
            return (
                  <div id = 'app'>
                        <button onClick = { () => setPlayMusic(true) }>music button</button>
                        <h1>Edward or Jacob?</h1>
                        <br/>
                        <button value = 'edward' onClick = { handleEdwardClick }>Team Edward</button>
                        <button value = 'jacob' onClick = { handleJacobClick }>Team Jacob</button>
                  </div>
            )
      }
      else {
            return (
                  <div>
                        <TeamRouter team = {team} />
                  </div>
            )
      }
}

export default App;