import React from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import { useSelector, useDispatch } from "react-redux";
import { delete_note } from "../../redux/action/noteAction";
const NoteView = ({ viewNote, itemKey }) => {
  const dispatch = useDispatch();
  const { notes, nowKey } = useSelector((state) => state.notes);
  const nowPageData = notes[nowKey];
  const date = new Date(nowPageData && notes[nowKey].date).toLocaleString();

  const handleDelete = () => {
    dispatch(delete_note(itemKey));
  };

  return (
    <div className="right">
      <Scrollbars
        style={{ height: "100%" }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <ControlBox>
          <button type="button">수정</button>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        </ControlBox>
        <p>{viewNote && viewNote.title}</p>
        {/* <p>{nowPageData && date}</p> */}
      </Scrollbars>
    </div>
  );
};

export default NoteView;

const ControlBox = styled.div``;
