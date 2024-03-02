import React from "react";
import { MegaPopupBox } from "../styled/megaboxStyle";
import { CgCloseO } from "react-icons/cg";
import { BiCameraMovie } from "react-icons/bi";

const MegaPopup = ({ info, closePopup }) => {
  const { movieNm, openDt, salesShare, story, imageURL, overview, ageRes } = info;
  return (
    <MegaPopupBox>
      <div className="bg" onClick={closePopup}></div>
      <div className="popup">
        <span className="close_btn" onClick={closePopup}>
          <CgCloseO />
        </span>
        <h2>
          <i>
            <BiCameraMovie />
          </i>
          MOVIE INFORMATION
        </h2>
        <hr />
        <div className="content">
          <div className="img_box">
            <img src={imageURL} alt={movieNm} />
          </div>
          <div className="txt_box">
            <h3>
              {movieNm}
              <img src={ageRes} alt={movieNm} />
            </h3>
            <p>
              <strong>예매율 : {salesShare}%</strong>
              <strong>개봉일 : {openDt}</strong>
              <strong>개요 : {overview}</strong>
            </p>
            <hr />
            <p className="story">
              <span>{story}</span>
            </p>
          </div>
        </div>
      </div>
    </MegaPopupBox>
  );
};

export default MegaPopup;
