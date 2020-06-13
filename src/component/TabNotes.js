import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../component/NoteCard";
import styled from "styled-components";
import { database } from "../firebase";
import { set_total } from "../action/noteAction";

const TabNotes = () => {
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const getData = () => {
    const noteRef = database.ref(`notes/${auth.uid}`);
    noteRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setNotes(data);
    });
  };

  useEffect(() => {
    getData();
    //console.log(notes.length);
  }, []);

  useEffect(() => {
    const num = Object.keys(notes).length;
    dispatch(set_total(num));
  }, [notes]);
  return (
    <div className="inner">
      {!notes ? (
        <div className="empty">작성된 글이 없습니다.</div>
      ) : (
        Object.keys(notes).map((key, index) => {
          return <Card note={notes[key]} key={key} id={key} />;
        })
      )}
    </div>
  );
};

export default TabNotes;
