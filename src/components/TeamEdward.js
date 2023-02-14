import React from "react";

import MusicPlayer from "./MusicPlayer";
import RandomQuote from "./RandomQuote";
import Comments from "./Comments";
import Form from "./Form";

function TeamEdward() {

    return (
        <div className = 'team'>
            <MusicPlayer />
            <img src = "./fonts/teamedward_header.gif" alt = "we are team edward" />
            <RandomQuote />
            <div className = 'align-left'>
                <img src = "./fonts/weareteamedward.gif" alt = "we are team edward" />
                <img src = "./fonts/wesparkleinthesunlight.gif" alt = "we sparkle in the sunlight" />
                <img src = "./fonts/welivemanyhumanlifetimes.gif" alt = "we live many human lifetimes" />
                <img src = "./fonts/wedrinkanimalblood.gif" alt = "we drink animal blood" />
                <img src = "./fonts/wearevampires.gif" alt = "we are vampires" />
                <img src = "./fonts/weareteamedward.gif" alt = "we are team edward" />
                <img src = "../images/edward-blingee.gif" alt = "edward cullen blingee" />
                <img src = "../images/edward-cars.gif" alt = "edward cullen smirking in front of cars" />
            </div>
            <div className = 'align-right'>
                <img src = "../images/edward-glare.gif" />
                <Comments url = "http://localhost:8004/edward_comments" />
                <Form url = "http://localhost:8004/edward_comments" />
                <br />
                <br />
                <br />
                <br />
                <img id = 'tracksuitrob' src = "../images/tracksuitrobbabyyyyyy.webp" alt = "tracksuit rob meme" />

            </div>
        </div>
    )
}

export default TeamEdward;