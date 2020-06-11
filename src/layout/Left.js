import React, { useEffect, useState } from "react";
import Card from "../component/NoteCard";
import styled from "styled-components";

const Left = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        setNotes(res.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <LeftBox className="left">
      {notes &&
        notes.map((note) => {
          return <Card note={note} key={note.id} />;
        })}
    </LeftBox>
  );
};

export default Left;
const LeftBox = styled.aside`
  padding: 1em;
  overflow-y: auto;
`;
