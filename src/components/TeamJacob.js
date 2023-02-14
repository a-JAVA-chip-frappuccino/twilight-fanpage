import React from "react";

import MusicPlayer from "./MusicPlayer";
import RandomQuote from "./RandomQuote";
import Comments from "./Comments";
import Form from "./Form";

function TeamJacob() {
    
    return (
        <div className = 'team'>
            <MusicPlayer />
            <img src = "./fonts/teamjacob_header.gif" alt = "we are team jacob" />
            <RandomQuote />
            <div className = 'align-left'>
                <img src = "./fonts/weareteamjacob.gif" alt = "we are team jacob" />
                <img src = "./fonts/wehowlatthemoon.gif" alt = "we howl at the moon" />
                <img src = "./fonts/wetransformindarkness.gif" alt = "we transform in darkness" />
                <img src = "./fonts/wehavetheprotectionofourpack.gif" alt = "we have the protection of our pack" />
                <img src = "./fonts/wearewerewolves.gif" alt = "we are werewolves" />
                <img src = "./fonts/weareteamjacob.gif" alt = "we are team jacob" />
                <img src = "../images/jacob-blingee.gif" alt = "jacob black blingee" />
                <img src = "../images/jacob-putyourshirtonNO.gif" alt = "jacob black removing shirt" />
            </div>
            <div className = 'align-right'>
                <img src = "../images/jacob-lookback.gif" alt = "jacob black turns to face camera" />
                <Comments url = "http://localhost:8004/jacob_comments" />
                <Form url = "http://localhost:8004/jacob_comments" />
            </div>
        </div>
    )
}

export default TeamJacob;