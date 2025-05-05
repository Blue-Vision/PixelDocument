import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import useBaseUrl from '@docusaurus/useBaseUrl';

const VideoPlayer = ({url, width, height, youtubeUrl=''}) => {
  const [useYoutube, setUseYoutube] = useState(false);

  const handleError = () => {
    // console.warn("Local video failed to load, switching to YouTube...");
    setUseYoutube(true);
  };
  const resolvedSrc = useBaseUrl(url); // hỗ trợ baseUrl tự động

  return (
    <div className='player-wrapper' style={{ position: 'relative', paddingTop: '60.5%', width: '100%' }}>
      <ReactPlayer
        url={useYoutube ? youtubeUrl : resolvedSrc}
        width={width === undefined ? '100%' : width}
        height={height === undefined ? '100%' : height}
        style={{ position: 'absolute', top: 0, left: 0 }}
        controls
        onError={handleError}
      />
    </div>
  );
};

export default VideoPlayer;
