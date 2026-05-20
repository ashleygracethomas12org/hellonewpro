import React from 'react';
import DomeGallery from '../../../features/Components/DomeGallery/DomeGallery';

const DomeGalleryPage = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <DomeGallery
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale
      />
    </div>
  );
};

export default DomeGalleryPage;