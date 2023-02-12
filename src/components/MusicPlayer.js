import React, { useState } from "react";

const song = new Audio("../sounds/supermassiveblackhole-muse.mp3");

function MusicPlayer() {

    const [playMusic, setPlayMusic] = useState(false);

    console.log(playMusic);

    function handleClick() {
        setPlayMusic(!playMusic)
    }

    if (playMusic) {
        song.volume = 0.2;
        song.play();
    }
    else {
        song.pause();
    }

    return (
        <div>
            <button onClick = { handleClick }>{ playMusic ? "Pause BG Music" : "Play BG Music" }</button>
        </div>
    )
}

export default MusicPlayer;