import React, { useState } from 'react';
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

  return ( //return always need 1 parent, and then everything inside that one thing
    <div>
      <SearchBar text="my awesome searchbar" something="nothing" />
      <h1>hello world</h1>
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      <VideoDetails video={selectedVideo} />
    </div>


  );
}


export default App;

