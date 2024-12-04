import React from "react";
import PosterCard from "./PosterCard";

const PosterList = ({ data, onDelete }) => (
  <div>
    {data.map((item) => (
      <PosterCard key={item.id} item={item} onDelete={onDelete} />
    ))}
  </div>
);

export default PosterList;
