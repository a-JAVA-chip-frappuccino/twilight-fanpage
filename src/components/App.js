import React, { useState } from "react";

import TeamEdward from "./TeamEdward";
import TeamJacob from "./TeamJacob";

function App() {

      const [clicked, setClicked] = useState(false);
      const [team, setTeam] = useState('');

      if (team === 'edward' || team === 'jacob') {
            setClicked(true);
      }

      if (!clicked) {
            return (
                  <div id = 'app'>
                        <h1>Edward or Jacob?</h1>
                        <br/>
                        <button value = 'edward' onClick = { () => setTeam('edward') }>Team Edward</button>
                        <button value = 'jacob' onClick = { () => setTeam('jacob') }>Team Jacob</button>
                  </div>
            );
      }
      else {
            if (team === 'edward') {
                  <TeamEdward />
            }
            else if (team === 'jacob') {
                  <TeamJacob />
            }
      }
}

export default App;