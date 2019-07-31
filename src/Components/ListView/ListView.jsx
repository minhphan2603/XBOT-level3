import React from "react";
import { Button } from "reactstrap";

export default function ListView({ videoList, changeCurrentVideo }) {
  return (
    <div
      className="d-flex flex-column"
      style={{ overflow: "scroll", height: "100%" }}
    >
      {videoList.length
        ? videoList.map((video, i) => (
            <Button
              key={i}
              className="my-1"
              outline
              onClick={() => changeCurrentVideo(video)}
            >
              {video.name}
            </Button>
          ))
        : "NO VIDEO FOUND"}
    </div>
  );
}
