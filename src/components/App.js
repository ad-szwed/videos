import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  console.log(selectedVideo, 'selected video')
  const videos = [
    {
      id: 1,
      name: 'video name'
    },
    {
      id: 2,
      name: 'another video'
    }
  ];

  // useEffect happens at the very begning, similar to ComponentDidMount().
  // It accepts a second argument IF it is an empty array useEffect will be called only once
  // If we specify the value in [] the useEffect will be called whenever that value is updated (google it!)
  // useEffect(() => {
  //   setSelectedVideo(videos[0])
  //   console.log('useEffect')
  // }, [videos])

  return ( //return always need 1 parent, and then everything inside that one thing
    <div>
      <SearchBar text="my awesome searchbar" something="nothing" />
      <h1>hello world</h1>
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      {selectedVideo &
        <VideoDetails video={selectedVideo} />
      }
    </div>


  );
}

export default App;

