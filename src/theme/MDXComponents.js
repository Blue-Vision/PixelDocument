import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import VideoPlayer  from '@site/src/components/HomepageFeatures/VideoPlayer';
import Image from '@site/src/components/HomepageFeatures/Image';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<VideoPlayer>" tag to our VideoPlayer component
  // `VideoPlayer` will receive all props that were passed to `<VideoPlayer>` in MDX
  VideoPlayer,
  Image
};