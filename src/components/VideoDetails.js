import React from 'react';

// another way of creating functional component (compare with VideoItem.js)
export default function VideoDetails(props) {
  const { video } = props;
  console.log(video)

  // you can't console.log inside JSX!!!
  return (
    <h1>{video.name}</h1>
  )
}