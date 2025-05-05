import React from 'react';

export default function Image({src, alt, width, height}) {
  return (
    <div style={{textAlign: 'center'}}>
        <img src={src} alt={alt} width={width === undefined ? 'auto' : width} height={height === undefined ? 'auto' : height} />
    </div>
  );
}