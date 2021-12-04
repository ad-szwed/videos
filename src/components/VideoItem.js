import React from 'react';

const VideoItem = (props) => {
  const { video, onVideoSelect } = props
  return (
    <li>
      <a href='#' onClick={() => onVideoSelect(video)}>{video.name}</a>
    </li>
  )
}

export default VideoItem;