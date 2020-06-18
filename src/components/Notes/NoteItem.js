import React from "react";
import styled from "styled-components";

const NoteItem = ({ note }) => {
  return (
    <div>
      <p>{note.title}</p>
      <p>{note.content.time}</p>
    </div>
  );
};

export default NoteItem;
