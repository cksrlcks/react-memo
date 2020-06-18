import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { view_note } from "../../redux/action/noteAction";
const NoteItem = ({ note, itemKey }) => {
  const dispatch = useDispatch();

  const handleView = () => {
    dispatch(view_note(itemKey));
  };
  return (
    <NoteItemBox onClick={handleView}>
      <p className="title">{note.title}</p>
      <p className="summary">{note.content.blocks[0].data.text}</p>
      <p className="date">{note.content.time}</p>
    </NoteItemBox>
  );
};

export default NoteItem;

const NoteItemBox = styled.div`
  border: 1px solid #eee;
  padding: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  .title {
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 1em;
  }
  .summary {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 0.8em;
  }
  .date {
    opacity: 0.6;
    font-size: 0.8em;
    text-align: right;
  }
`;
