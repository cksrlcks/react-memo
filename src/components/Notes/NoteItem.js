import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { set_key } from "../../redux/action/noteAction";
const NoteItem = ({ note, itemKey }) => {
  const dispatch = useDispatch();
  const handleView = () => {
    dispatch(set_key(itemKey));
  };
  const render_date = new Date(note && note.date).toLocaleString();
  return (
    <NoteItemBox onClick={handleView}>
      <p className="title">{note && note.title}</p>
      <p className="summary">{note && note.content.blocks[0].data.text}</p>
      <p className="date">{render_date}</p>
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
