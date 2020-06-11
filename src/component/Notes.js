import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Notes = () => {
  const notes = useSelector((state) => state.notes, []);
  return (
    <>
      {notes.map((note) => {
        return (
          <CardBox key={note.id}>
            <Link to={`/notes/${note.id}`}>
              <div className="content">
                <p className="title">{note.title}</p>
                <p className="summary">
                  {note.summary.length > 0 ? note.summary : note.content}
                </p>
              </div>
              <div className="meta">
                <span className="date">{note.meta.date}</span>
                <span className="time">{note.meta.time}</span>
              </div>
            </Link>
          </CardBox>
        );
      })}
    </>
  );
};

export default Notes;
const CardBox = styled.div``;
