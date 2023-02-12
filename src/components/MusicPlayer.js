import React, { useState } from "react";

const song = new Audio("../sounds/supermassiveblackhole-muse.mp3");
song.volume = 0.2;

function MusicPlayer() {

    const [playMusic, setPlayMusic] = useState(false);

    function handleClick() {
        setPlayMusic(!playMusic)
    }

    playMusic ? song.play() : song.pause();

    return (
        <div className = 'player'>
            <label className = 'arrow'></label>
            <button onClick = { handleClick }>{ playMusic ? "Pause BG Music" : "Play BG Music" }</button>
            <br />
            <br />
        </div>
    )
}

export default MusicPlayer;