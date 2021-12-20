import React from 'react';

const VideoItem = (props) => {
  const { video, onVideoSelect } = props
  return (
    <li>
      <a href='#' onClick={() => onVideoSelect(video)}>{video.snippet.title}</a>
    </li>
  )
}

export default VideoItem;