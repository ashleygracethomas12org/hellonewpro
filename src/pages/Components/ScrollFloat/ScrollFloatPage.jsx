import React from "react";
import ScrollFloat from "../../../features/Components/ScrollFloat/ScrollFloat";

const ScrollFloatPage = () => {
  return (
    <div className="bg-black text-white">

      {/* Spacer so the component starts BELOW the fold */}
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#555', fontSize: '1.2rem' }}>↓ Scroll down</p>
      </div>

      {/* ScrollFloat now enters viewport as you scroll — trigger fires */}
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          React Bits
        </ScrollFloat>
      </div>

      {/* Spacer so scroll end position is reachable */}
      <div style={{ height: '100vh' }} />

    </div>
  );
};

export default ScrollFloatPage;