import React from "react";
import MegaItem from "./MegaItem";
import { MegaListContainer } from "../styled/megaboxStyle";

const MegaList = ({ data, onLike, onPopup }) => {
  return (
    <MegaListContainer>
      {data.map((item) => (
        <MegaItem key={item.id} item={item} onLike={onLike} onPopup={onPopup} />
      ))}
    </MegaListContainer>
  );
};

export default MegaList;
