import React from "react";

function TeamEdward() {

    fetch("http://localhost:3000/quotes")
    .then((response) => response.json)
    .then((quote) => console.log(quote))

    return (
        <div className = 'team'>
            <img src = "./fonts/teamedward_header.gif" alt = "we are team edward" />
        </div>
    )
}

export default TeamEdward;