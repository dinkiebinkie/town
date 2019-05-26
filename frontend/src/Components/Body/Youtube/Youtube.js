import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Chunk from "../../shared/Chunk";
import styled from "styled-components";

const binkieId = "UCqoMPjVw7Snc9owzyg94eMA";

const YouTubeChunk = styled(Chunk)`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const YouTubeContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 24px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 10px 0;
  }
`;

const VideoList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    margin-top: 16px;
    max-width: 49%;
    padding-bottom: 24.5%;
    padding-top: 25px;
    height: 0;
    width: 100%;
    position: relative;
    @media (max-width: 500px) {
      max-width: 100%;
      padding-bottom: 56.25%;
    }
  }
`;

const ChannelLink = styled.a`
  font-family: "Ogg", sans-serif;
  font-size: 4rem;
  font-style: italic;
  margin-top: 24px;
  color: #232323;
  text-decoration: none;
  font-weight: bold;
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
        }&channelId=${binkieId}&part=snippet,id&order=date&maxResults=5`,
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
    const { videos } = this.state;
    return (
      <YouTubeChunk>
        <YouTubeContainer>
          <div
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
          <VideoList>
            {videos.map((videoId, i) => {
              if (i === 0) return;
              return (
                <div>
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    className="youtubeVid"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                  />
                </div>
              );
            })}
          </VideoList>
          <ChannelLink
            target="_blank"
            href="https://www.youtube.com/channel/UCqoMPjVw7Snc9owzyg94eMA"
          >
            See more videos
          </ChannelLink>
        </YouTubeContainer>
      </YouTubeChunk>
    );
  }
}

export default Youtube;
