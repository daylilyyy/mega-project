import React from "react";
import { MegaItemBox } from "../styled/megaboxStyle";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const MegaItem = ({ item, onLike, onPopup }) => {
  const { isLike, rank, likeNum, movieNm, imageURL, salesShare, ageRes, openDt } = item;
  return (
    <MegaItemBox>
      <strong>{rank}</strong>
      <img className="poster" src={imageURL} alt={movieNm} onClick={() => onPopup(rank)} />
      <h2>
        <img src={ageRes} alt={movieNm} />
        {movieNm}
      </h2>
      <p className="info">
        <span>예매율 {salesShare}%</span>
        <span>개봉일 {openDt} </span>
      </p>
      <p className="btn">
        <button onClick={() => onLike(rank)} className="btn2">
          <i>{isLike ? <AiFillHeart style={{ color: "red" }} /> : <AiOutlineHeart />}</i>
          <span>{likeNum.toLocaleString()}</span>
        </button>
        <button className="btn2">예매</button>
        <button className="btn2">
          <img src="./images/btn.png" alt="" />
        </button>
      </p>
    </MegaItemBox>
  );
};

export default MegaItem;
