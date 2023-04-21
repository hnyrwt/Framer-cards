import React from "react";

const EpisodeDetails = (props) => (
  <div key={props.id} className="grid grid-cols-2">
    <div>{props.name}</div>
    <div>{props.air_date}</div>
  </div>
);

export default EpisodeDetails;
