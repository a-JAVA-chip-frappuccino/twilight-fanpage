import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

document.addEventListener("DOMContentLoaded", function() {

    const totalDroplets = Math.floor(Math.random() * 50) + 20;
    
    let i = 0;
    
    while ( i < totalDroplets ) {

      const node = document.createElement("i");
      const posX = Math.floor(Math.random() * window.innerWidth);
      const posY = Math.floor(Math.random() * window.innerHeight);
      const rotation = Math.random() * 180;
      const delay = Math.random() * 20;
      const scale = Math.random() * 0.2;
      node.style.left = posX + 'px';
      node.style.top = posY + 'px';
      node.style.transform = 'rotate(' + rotation + 'deg) scale(' + scale + ')';
      node.style.animationDelay = delay + 's';
      document.querySelector('body').appendChild(node);
      i++;

    }
    
  });

ReactDOM.render(<App />, document.getElementById('root'));