import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteView from "../components/Notes/NoteView";
import NoteList from "../components/Notes/NoteList";
import EmptyNote from "../components/Notes/EmptyNote";
import styled from "styled-components";
import { load_notes, set_key } from "../redux/action/noteAction";

const Notes = ({ history }) => {
  const dispatch = useDispatch();
  const { notes, nowKey } = useSelector((state) => state.notes);
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <>
      {!loggedIn ? (
        <LoginRequestBox>로그인이 필요합니다.</LoginRequestBox>
      ) : notes ? (
        <NotesListBox>
          <NotePageView>
            <NoteList notes={notes} />
            {nowKey && <NoteView note={notes[nowKey]} itemKey={nowKey} />}
          </NotePageView>
        </NotesListBox>
      ) : (
        <EmptyNote />
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
