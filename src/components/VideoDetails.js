import React from 'react';

// another way of creating functional component (compare with VideoItem.js)
export default function VideoDetails(props) {
  const { video } = props
  return (
    <h1>{video.name}</h1>
  )
}