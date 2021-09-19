import React from 'react';

const SendButton = props => {

    function ani() {
        document.getElementById('plane').className = 'animation';
    }
    function anitwo() {
        document.getElementById('bg').className = 'animation2';
    }

    return <div className="container">
        <button className="btn btn-inside btn-boarder"><img src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png" width="64px" height="64px" id="plane" /></button>
        <div className="bg"><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" id="bg" width="32px" height="32px" style="opacity:0;" /></div>
        <div className="around around-boarder" onclick="ani(); anitwo();"></div>
    </div>
}