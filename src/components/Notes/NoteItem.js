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
  const render_update = note.updateDate ? new Date(note.updateDate).toLocaleString() : "";

  const striptHTML = (content) => {
    let tempElement = document.createElement("div");
    tempElement.innerHTML = content;

    return tempElement.textContent || tempElement.innerText || "";
  };
  return (
    <NoteItemBox onClick={handleView}>
      <p className="title">{striptHTML(note && note.content.blocks[0].data.text)}</p>
      <p className="date">작성일 : {render_date}</p>
      {render_update && <p className="modify">최근 수정일 : {render_update}</p>}
    </NoteItemBox>
  );
};

export default NoteItem;

const NoteItemBox = styled.div`
  border: 1px solid #eee;
  padding: 1.4em 1.2em;
  margin-bottom: 1em;
  border-radius: 2px;
  cursor: pointer;
  .title {
    font-weight: 500;
    margin-bottom: 1.6em;
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
    margin-bottom: 0.4em;
  }
  .modify {
    opacity: 0.6;
    font-size: 0.8em;
    text-align: right;
  }
`;
