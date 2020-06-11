import React from "react";
import { useSelector } from "react-redux";
import Card from "../component/NoteCard";
import styled from "styled-components";

const TabNotes = () => {
  const notes = useSelector((state) => state.notes, []);
  return (
    <div className="inner">
      {notes &&
        notes.map((note) => {
          return <Card note={note} key={note.id} />;
        })}
    </div>
  );
};

export default TabNotes;
