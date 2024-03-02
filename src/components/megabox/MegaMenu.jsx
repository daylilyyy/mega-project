import React from "react";
import { MeGaMenuBox } from "../styled/megaboxStyle";
import { TbMovie, TbMovieOff } from "react-icons/tb";
import { MdSchedule } from "react-icons/md";

const MegaMenu = ({ data, onShowScreen }) => {
  return (
    <MeGaMenuBox>
      <p>
        <button onClick={() => onShowScreen("All")}>ALL</button>
        <button onClick={() => onShowScreen("on")}>
          <i>
            <TbMovie />
          </i>
          상영중
        </button>
        <button onClick={() => onShowScreen("off")}>
          <i>
            <TbMovieOff />
          </i>
          상영종료
        </button>
        <button onClick={() => onShowScreen("schedule")}>
          <i>
            <MdSchedule />
          </i>
          상영예정
        </button>
      </p>
    </MeGaMenuBox>
  );
};

export default MegaMenu;
