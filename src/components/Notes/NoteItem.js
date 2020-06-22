import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { set_key } from "../../redux/action/noteAction";
const NoteItem = ({ note, itemKey }) => {
  const dispatch = useDispatch();
  const handleView = () => {
    dispatch(set_key(itemKey));
  };
  const { nowKey } = useSelector((state) => state.notes);
  const render_date = new Date(note && note.date).toLocaleString();
  const render_update = note.updateDate ? new Date(note.updateDate).toLocaleString() : "";

  const striptHTML = (content) => {
    let tempElement = document.createElement("div");
    tempElement.innerHTML = content;

    return tempElement.textContent || tempElement.innerText || "";
  };
  return (
    <NoteItemBox onClick={handleView} className={itemKey === nowKey ? "active" : ""}>
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
  border-radius: 4px;
  cursor: pointer;
  .title {
    font-weight: 500;
    font-size: 1.2em;
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
    padding-top: 1.4em;
    margin-bottom: 0.4em;
    border-top: 1px dashed #eee;
  }
  .modify {
    opacity: 0.6;
    font-size: 0.8em;
    text-align: right;
  }
  &.active {
    border: 1px solid rgba(24, 144, 255, 0.6);
    position: relative;
    box-shadow: 0 0 0 2pt rgba(24, 144, 255, 0.2);
    .title {
      color: #1890ff;
    }
  }
`;
