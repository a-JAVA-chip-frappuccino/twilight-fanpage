import React from "react";

import TeamEdward from "./TeamEdward";
import TeamJacob from "./TeamJacob";

function App() {
	return (
		<div id = 'app'>
            <h1>Team Edward or Team Jacob?</h1>
            <br/>
            <button name = 'edward' value = 'edward'>Team Edward</button>
            <button name = 'jacob' value = 'jacob'>Team Jacob</button>
		</div>
	);
}

export default App;