import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteItem from "./NoteItem";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
const NoteList = () => {
  const { note_loading, notes } = useSelector((state) => state.notes);
  return (
    <div className="left">
      <Scrollbars
        style={{ height: "100%" }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <NoteItemBox>
          {Object.keys(notes).map((key, index) => (
            <NoteItem note={notes[key]} key={key} itemKey={key} />
          ))}
        </NoteItemBox>
      </Scrollbars>
    </div>
  );
};

export default NoteList;

const NoteItemBox = styled.div`
  padding: 1em;
`;
