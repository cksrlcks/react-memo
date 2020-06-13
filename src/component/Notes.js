import React, { useEffect, useState } from "react";
import TabNotes from "./TabNotes";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Notes = () => {
  const totalNotes = useSelector((state) => state.notes.total);

  return (
    <div className="page_note">
      <div className="top">
        <p>작성된 노트수 : {totalNotes}</p>
      </div>
      <TabNotes />
    </div>
  );
};

export default Notes;
const CardBox = styled.div``;
