import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy'

// import Plyr from 'plyr-react';
// import './plyr.css';

// const VideoPlayer = ({ url, width, height, youtubeUrl }) => {
//   const [useYoutube, setUseYoutube] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (!useYoutube && videoRef.current) {
//       const videoEl = videoRef.current.querySelector('video');
//       if (videoEl) {
//         const onError = () => {
//           console.warn('Local video failed. Switching to YouTube...');
//           setUseYoutube(true);
//         };
//         videoEl.addEventListener('error', onError);

//         return () => {
//           videoEl.removeEventListener('error', onError);
//         };
//       }
//     }
//   }, [useYoutube]);

//   const source = useYoutube
//     ? {
//         type: 'video',
//         sources: [
//           {
//             src: youtubeUrl,
//             provider: 'youtube',
//           },
//         ],
//       }
//     : {
//         type: 'video',
//         sources: [
//           {
//             src: url,
//             type: 'video/mp4',
//           },
//         ],
//       };

//   return (
//     <div
//       ref={videoRef}
//       style={{ width: '100%', aspectRatio: '16 / 9', margin: 'auto' }}
//     >
//       <Plyr source={source} />
//     </div>
//   );
// };

// export default VideoPlayer;

const VideoPlayer = ({url, width, height, youtubeUrl=''}) => {
  const [useYoutube, setUseYoutube] = useState(false);

  const handleError = () => {
    // console.warn("Local video failed to load, switching to YouTube...");
    setUseYoutube(true);
  };

  return (
    <div className='player-wrapper' style={{ position: 'relative', paddingTop: '60.5%', width: '100%' }}>
      <ReactPlayer
        url={useYoutube ? youtubeUrl : url}
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

// export default function VideoPlayer({url, width, height}) {
//   return (
//     <div className='player-wrapper' style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 ratio */, width: '100%' }}>
//       <ReactPlayer
//         controls
//         url={url}
//         width={width === undefined ? '100%' : width}
//         height={height === undefined ? '100%' : height}
//         style={{ position: 'absolute', top: 0, left: 0 }}
//       />
//     </div>
//   );
// }
