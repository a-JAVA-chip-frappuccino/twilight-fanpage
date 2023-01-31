import React from "react";

import TeamEdward from "./TeamEdward";
import TeamJacob from "./TeamJacob";

function TeamRouter( {team} ) {
    return (
        <div>
            { (team === 'edward') ? <TeamEdward /> : <TeamJacob /> }
        </div>
    )
}

export default TeamRouter;