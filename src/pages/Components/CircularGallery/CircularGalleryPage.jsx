import React from 'react';
import CircularGallery from '../../../features/Components/CircularGallery/CircularGallery';

const CircularGalleryPage = () => {
  return (
    <div
      style={{
        height: '600px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CircularGallery
        bend={1}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollSpeed={2}
        scrollEase={0.05}
      />
    </div>
  );
};

export default CircularGalleryPage;