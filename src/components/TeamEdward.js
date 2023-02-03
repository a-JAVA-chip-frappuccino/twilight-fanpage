import React from "react";

import RandomQuote from "./RandomQuote";
import Comments from "./Comments";
import Form from "./Form";

function TeamEdward() {

    return (
        <div className = 'team'>
            <img src = "./fonts/teamedward_header.gif" alt = "we are team edward" />
            <RandomQuote />
            <div className = 'align-left'>
                <img src = "./fonts/weareteamedward.gif" alt = "we are team edward" />
                <img src = "./fonts/wesparkleinthesunlight.gif" alt = "we sparkle in the sunlight" />
                <img src = "./fonts/welivemanyhumanlifetimes.gif" alt = "we live many human lifetimes" />
                <img src = "./fonts/wedrinkanimalblood.gif" alt = "we drink animal blood" />
                <img src = "./fonts/wearevampires.gif" alt = "we are vampires" />
                <img src = "./fonts/weareteamedward.gif" alt = "we are team edward" />
            </div>
            <div className = 'align-right'>
                <Comments url = "http://localhost:8004/edward_comments" />
                <Form url = "http://localhost:8004/edward_comments" />
            </div>
        </div>
    )
}

export default TeamEdward;