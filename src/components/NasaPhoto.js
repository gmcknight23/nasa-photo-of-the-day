import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  background-color: skyblue;
  color: darkred;
`;

const NasaPhoto = (props) => {
  return (
    <StyledDetails className="nasa-photo-wrapper">
      <h3>{props.photo.title}</h3>
      <p>{props.photo.date}</p>
      <img src={props.photo.hdurl} alt="nasa-APOD" />
      <p className="explanation">({props.photo.explanation} </p>
    </StyledDetails>
  );
};

export default NasaPhoto;

// {
//   <iframe
//     src={props.photo.url}
//     frameborder="0"
//     height="500"
//     width="600"
//     allow="autoplay; encrypted-media"
//     allowFullScreen
//     title="video"
//   />;
// }
