import React from "react";

import RandomQuote from "./RandomQuote";
import JacobComments from "./JacobComments";

function TeamJacob() {
    return (
        <div className = 'team'>
            <img src = "./fonts/teamjacob_header.gif" alt = "we are team jacob" />
            <RandomQuote />
            <div className = 'align-left'>
                <img src = "./fonts/weareteamjacob.gif" alt = "we are team jacob" />
                <img src = "./fonts/wehowlatthemoon.gif" alt = "we howl at the moon" />
                <img src = "./fonts/wetransformindarkness.gif" alt = "we transform in darkness" />
                <img src = "./fonts/wehavetheprotectionofourpack.gif" alt = "we have the protection of our pack" />
                <img src = "./fonts/wearewerewolves.gif" alt = "we are werewolves" />
                <img src = "./fonts/weareteamjacob.gif" alt = "we are team jacob" />
            </div>
            <div className = 'align-right'>
                <JacobComments />
            </div>
        </div>
    )
}

export default TeamJacob;