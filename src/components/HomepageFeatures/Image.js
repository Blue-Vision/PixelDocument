import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Image({src, alt, width, height}) {
  const resolvedSrc = useBaseUrl(src); // hỗ trợ baseUrl tự động

  return (
    <div style={{textAlign: 'center'}}>
        <img src={resolvedSrc} alt={alt} width={width === undefined ? 'auto' : width} height={height === undefined ? 'auto' : height} />
    </div>
  );
}