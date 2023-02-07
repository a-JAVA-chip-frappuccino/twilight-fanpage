import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

document.addEventListener("DOMContentLoaded", function() {
   
    var amount = 30;
    var body = document.querySelector('body');
    var i = 0;
    
    while ( i < amount ) {

      var node = document.createElement("i");
      var posX = Math.floor(Math.random() * window.innerWidth);
      var posY = Math.floor(Math.random() * window.innerHeight);
      var rotation = Math.random() * 180;
      var delay = Math.random() * 20;
      var scale = Math.random() * 0.2;
      node.style.left = posX + 'px';
      node.style.top = posY + 'px';
      node.style.transform = 'rotate(' + rotation + 'deg) scale(' + scale + ')';
      node.style.animationDelay = delay + 's';
      body.appendChild(node);
      i++;
      
    }
    
  });

ReactDOM.render(<App />, document.getElementById('root'));