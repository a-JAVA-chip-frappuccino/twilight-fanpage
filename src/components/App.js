import React, { useState } from "react";

import TeamRouter from "./TeamRouter";

function App() {
      const [clicked, setClicked] = useState(false);
      const [team, setTeam] = useState('');

      function handleEdwardClick() {
            setClicked(true);
            setTeam('edward');
      }

      function handleJacobClick() {
            setClicked(true);
            setTeam('jacob');
      }

      return (
            <div id = 'app'>
                  <h1>Edward or Jacob?</h1>
                  <br/>
                  <button value = 'edward' onClick = { handleEdwardClick }>Team Edward</button>
                  <button value = 'jacob' onClick = { handleJacobClick }>Team Jacob</button>

                  <div id = 'edward-jacob'>
                        {clicked ? <TeamRouter team = {team} /> : null}
                  </div>
            </div>
      )
}

export default App;