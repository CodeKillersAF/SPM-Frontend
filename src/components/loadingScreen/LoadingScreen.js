import React, { useEffect, useRef } from 'react';
import './loading.css';
import { init } from 'ityped';

export default function LoadingScreen() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            strings: ["Kasuki Restaurant"],
            typeSpeed: 150,
            // backSpeed: 120,
            // loop: false,
            disableBackTyping: true  
        })
    }, []);

  return (
    <div className="loadingScreenDesign">
      <img
        src="https://i.pinimg.com/originals/f0/f7/36/f0f7363394be236aaac3feeb8bdde3a1.gif"
        width="50%"
        height="50%"
      />
      <div className="kasukiName" ref={textRef}></div>
    </div>
  );
}
