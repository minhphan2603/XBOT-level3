import React from "react";

export default function MainView({ video }) {
  return (
    <div>
      {video.link ? (
        <div>
          <iframe title="video" width="100%" height="700px" src={video.link} />
          <p>{video.name}</p>
        </div>
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
}
