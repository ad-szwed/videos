import React from 'react';
import VideoItem from './VideoItem'

// this is a function expression, with the arrow function
// functional component use return insead of the render method
const VideoList = (props) => {
  console.log(props, 'props')
  const { videos, onVideoSelect } = props
  console.log(videos, 'videos')
  return (
    // <> </> - it's a react fragment, used instead of <div>
    <>
      <h1>Video List</h1>
      <ul>
        {/*  the callback of map method always needs return */}
        {/* using arrow function allows me omit return and {} on a single line statement */}
        {
          videos.map((v, index) => {
            return (
              <VideoItem video={v} onVideoSelect={onVideoSelect} />
            )
          })
        }
      </ul>
    </>
  )
}

export default VideoList;