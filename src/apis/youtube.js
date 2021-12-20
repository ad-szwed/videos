import axios from 'axios';

const KEY = 'AIzaSyBI79hm2vH_Qy5691CstN2KhslAA-KgQZM';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})