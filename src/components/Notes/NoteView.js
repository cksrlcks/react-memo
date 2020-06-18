import React from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import { useSelector } from "react-redux";

const NoteView = ({ nowNote }) => {
  const { notes, nowKey } = useSelector((state) => state.notes);
  const nowPageData = notes[nowKey];
  //console.log(nowKey && notes[nowKey]);
  return (
    <div className="right">
      <Scrollbars
        style={{ height: "100%" }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <p>{nowPageData && nowPageData.title}</p>
        <p>{nowPageData && nowPageData.date}</p>
      </Scrollbars>
    </div>
  );
};

export default NoteView;
