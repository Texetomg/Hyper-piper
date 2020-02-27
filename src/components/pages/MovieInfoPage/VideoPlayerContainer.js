import VideoPlayer from 'react-video-js-player'
import React, {useState} from 'react'


const VideoPlayerContainer = ({data}) => {
  const [ player, setPlayer ] = useState({})
const [ videoSrc, setVideoSrc ] = useState('http://www.example.com/path/to/video.mp4')

  const onPlayerReady = (player) => {
    console.log("Player is ready: ", player);
    setPlayer(player);
  }

  const onVideoPlay = (duration) => {
      console.log("Video played at: ", duration);
  }

  const onVideoPause = (duration) => {
      console.log("Video paused at: ", duration);
  }

  const onVideoTimeUpdate = (duration) => {
      console.log("Time updated: ", duration);
  }

  const onVideoSeeking = (duration) => {
      console.log("Video seeking: ", duration);
  }

  const onVideoSeeked = (from, to) => {
      console.log(`Video seeked from ${from} to ${to}`);
  }

  const onVideoEnd = () => {
      console.log("Video ended");
  }

  return (
    <VideoPlayer
    controls={true}
    src={videoSrc}
    poster={data.images.poster}
    width="720"
    height="420"
    onReady={onPlayerReady}
    onPlay={onVideoPlay}
    onPause={onVideoPause}
    onTimeUpdate={onVideoTimeUpdate}
    onSeeking={onVideoSeeking}
    onSeeked={onVideoSeeked}
    onEnd={onVideoEnd}
  />
  )
}

export default VideoPlayerContainer
