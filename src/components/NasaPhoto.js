import React from "react";

const NasaPhoto = (props) => {
  return (
    <div className="nasa-photo-wrapper">
      <h3>{props.photo.title}</h3>
      <p>{props.photo.date}</p>
      <iframe
        src={props.photo.url}
        frameborder="0"
        height="500"
        width="600"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
      <p className="explanation">({props.photo.explanation} </p>
    </div>
  );
};

export default NasaPhoto;
