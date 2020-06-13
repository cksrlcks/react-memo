import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ note, id }) => {
  //console.log(note);
  return (
    <CardBox>
      <Link to={`/notes/${id}`}>
        <div className="content">
          <p className="title">{note.title}</p>
          <p className="summary">{note.content}</p>
        </div>
        <div className="meta">
          {/* <span className="date">{note.meta.date}</span>
          <span className="time">{note.meta.time}</span> */}
        </div>
      </Link>
    </CardBox>
  );
};

export default Card;
const CardBox = styled.div`
  display: block;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 2px;
  margin-bottom: 1em;
  cursor: pointer;
  .content {
    padding: 1em;
    line-height: 1.4em;
    .title {
      font-weight: 500;
      margin-bottom: 0.5em;
    }
  }
  .meta {
    border-top: 1px solid #eee;
    padding: 1em;
    font-size: 13px;
    color: #888;
    .date {
      margin-right: 0.5em;
    }
  }
`;
