import React from "react";

import RandomQuote from "./RandomQuote";
import JacobComments from "./JacobComments";

function TeamJacob() {
    return (
        <div className = 'team'>
            <img src = "./fonts/teamjacob_header.gif" alt = "we are team jacob" />
            <RandomQuote />
            <div className = 'align-left'>
                <p>
                    We are team Jacob.
                    We howl at the moon, we transform under the cover of darkness, and we follow the alpha.
                    We know we must be lone wolves, but have the protection of the pack.
                    We are werewolves.
                    We are team Jacob.
                </p>
            </div>
            <div className = 'align-right'>
                <JacobComments />
            </div>
        </div>
    )
}

export default TeamJacob;