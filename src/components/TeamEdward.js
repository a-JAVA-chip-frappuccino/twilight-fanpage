import React from "react";

import RandomQuote from "./RandomQuote";
import EdwardComments from "./EdwardComments";

function TeamEdward() {

    return (
        <div className = 'team'>
            <img src = "./fonts/teamedward_header.gif" alt = "we are team edward" />
            <RandomQuote />
            <div className = 'align-left'>
                <p>
                    We are team Edward.
                    We sparkle in the sunlight, we live many human lifetimes, and we drink animal blood.
                    We are misunderstood by humanity, but we continue our struggle in darkness.
                    We are vampires.
                    We are team Edward.
                </p>
            </div>
            <div className = 'align-right'>
                <EdwardComments />
            </div>
        </div>
    )
}

export default TeamEdward;