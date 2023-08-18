import React, { useState } from 'react';

const ZoomableDiv = () => {
  const [zoom, setZoom] = useState(1);

  const handleZoom = (e) => {
    // Increase or decrease zoom level based on the wheel event delta
    const newZoom = Math.min(Math.max(zoom + e.deltaY * -0.01, 0.5), 3);
    setZoom(newZoom);
  };

  const divStyle = {
    width: '100%',
    height: '100%',

  };

  const contentStyle = {
    width: '100%',
    height: '100%',
    transform: `scale(${zoom})`, // Apply the zoom level
    transformOrigin: '0 0',
    transition: 'transform 0.2s ease',
  };

  return (
    <div style={divStyle} onWheel={handleZoom}>
      <div style={contentStyle}>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default ZoomableDiv;
