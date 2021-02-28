import React from "react";
import ReactPlayer from "react-player";

function YoutubeVideos(props) {
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <ReactPlayer url="https://youtu.be/z1YujAFy9pc" />
    </div>
  );
}

export default YoutubeVideos;
