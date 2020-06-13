import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { database } from "../firebase";

const NotePage = ({ match }) => {
  const pageId = match.params.id;

  const [note, setNote] = useState("");
  const auth = useSelector((state) => state.firebase.auth);
  const getData = () => {
    const noteRef = database.ref(`notes/${auth.uid}/${pageId}`);
    noteRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setNote(data);
      console.log(data);
    });
  };
  useEffect(() => {
    getData();
  }, [pageId]);

  return (
    <>
      <div className="title">{note.title}</div>
      <div className="content">{note.content}</div>
    </>
  );
};

export default NotePage;
