import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteView from "../components/Notes/NoteView";
import NoteList from "../components/Notes/NoteList";
import EmptyNote from "../components/Notes/EmptyNote";
import styled from "styled-components";

const Notes = () => {
  const dispatch = useDispatch();
  const { note_loading, notes, nowKey } = useSelector((state) => state.notes);
  const { loading, loggedIn, user } = useSelector((state) => state.user);
  const [viewNote, setViewNote] = useState("");
  const viewPageSetting = (key) => {
    const item = notes[key];
    setViewNote(item);
  };
  useEffect(() => {
    viewPageSetting(nowKey);
  }, [nowKey]);
  return (
    <>
      {!loggedIn ? (
        <LoginRequestBox>로그인이 필요합니다.</LoginRequestBox>
      ) : (
        <NotesListBox>
          {note_loading ? (
            <>노트를 불러오는 중입니다.</>
          ) : (
            <>
              {!notes ? (
                <EmptyNote />
              ) : (
                <NotePageView>
                  <NoteList notes={notes} />
                  <NoteView viewNote={viewNote} itemKey={nowKey} />
                </NotePageView>
              )}
            </>
          )}
        </NotesListBox>
      )}
    </>
  );
};

export default Notes;
const LoginRequestBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NotesListBox = styled.div`
  height: 100%;
`;

const NotePageView = styled.div`
  display: flex;
  height: 100%;
`;
