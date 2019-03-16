import React, { useState, useEffect } from "react";
import axios from "axios";
import Chunk from "../../shared/Chunk";
import YouTube from "react-youtube";

const spelunky = "lB_6LZLQOKs";
const binkieId = "UCqoMPjVw7Snc9owzyg94eMA";

const Youtube = () => {
  const [videoId, setVideoId] = useState(spelunky);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${
          process.env.YOUTUBE_API_KEY
        }&channelId=${binkieId}&part=snippet&maxResults=3&order=date&type=video`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  // const onReady = event => setPlayer(event.target);
  // const onPlayVideo = () => player.playVideo();
  // const onPauseVideo = () => player.pauseVideo();
  // const onChangeVideo = () =>
  // setVideoId(videoId === videoIdA ? videoIdB : videoIdA);

  return (
    <Chunk>
      Binkie YouTube Videos
      <YouTube videoId={videoId} />
      {/* <button onClick={onPlayVideo}>Play</button>
      <button onClick={onPauseVideo}>Pause</button>
      <button onClick={onChangeVideo}>Change Video</button> */}
    </Chunk>
  );
};

export default Youtube;
