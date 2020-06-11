import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NotePage = ({ match }) => {
  const pageId = match.params.id;
  const note = useSelector(
    (state) => state.notes.filter((note) => note.id == pageId),
    []
  );
  return (
    <>
      <div className="title">{note[0].title}</div>
      <div className="content">{note[0].content}</div>
    </>
  );
};

export default NotePage;
