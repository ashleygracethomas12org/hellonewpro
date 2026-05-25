import React from 'react';
import FallingText from '../../../features/Components/FallingText/FallingText';

const FallingTextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      {/* ✅ FIX: explicit height so Matter.js gets real dimensions.
          Without this, height: 100% collapses to ~0px inside a flex container */}
      <div style={{ width: '100%', height: '500px' }}>
        <FallingText
          text="React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow."
          highlightWords={['React', 'Bits', 'animated', 'components', 'simplify']}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.33}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
    </div>
  );
};

export default FallingTextPage;