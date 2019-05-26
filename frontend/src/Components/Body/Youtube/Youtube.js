import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Chunk from "../../shared/Chunk";
import YouTube from "react-youtube";
import styled from "styled-components";

const binkieId = "UCqoMPjVw7Snc9owzyg94eMA";

const YouTubeContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 24px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Youtube extends Component {
  state = {
    videos: ["zMQmIq40NI8"]
  };

  componentWillMount() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${
          process.env.REACT_APP_YOUTUBE_API_KEY
        }&channelId=${binkieId}&part=snippet,id&order=date&maxResults=20`,
        { crossDomain: true }
      )
      .then(res => {
        const { items } = res.data;
        console.log("res", res);
        let incomingVideoIds = [];
        items.forEach(video => {
          if (video.id.kind === "youtube#video")
            incomingVideoIds.push(video.id.videoId);
        });
        this.setState({ videos: incomingVideoIds });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(process.env);
    const { videos } = this.state;
    console.log(videos);
    return (
      <Chunk
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <YouTubeContainer>
          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0,
              width: "100%"
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              src={`https://www.youtube.com/embed/${videos[0]}`}
              frameBorder="0"
            />
          </div>
          {videos.map((videoId, i) => {
            if (i === 0) return;
            return <YouTube className="youtubeVid" videoId={videoId} />;
          })}
        </YouTubeContainer>
      </Chunk>
    );
  }
}

export default Youtube;
