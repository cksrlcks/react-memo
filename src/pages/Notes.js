import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteView from "../components/Notes/NoteView";
import NoteList from "../components/Notes/NoteList";
import EmptyNote from "../components/Notes/EmptyNote";
import NoUser from "../components/user/NoUser";
import styled from "styled-components";

const Notes = ({ history }) => {
  const dispatch = useDispatch();
  const { notes, nowKey } = useSelector((state) => state.notes);
  const { loggedIn } = useSelector((state) => state.user);
  const handleLogin = () => {
    history.push("/User");
  };
  const handleWrite = () => {
    history.push("/Write");
  };
  return (
    <>
      {!loggedIn ? (
        <NoUser onClick={handleLogin} />
      ) : notes ? (
        <NotesListBox>
          <NotePageView>
            <NoteList notes={notes} />
            {nowKey && <NoteView note={notes[nowKey]} itemKey={nowKey} />}
          </NotePageView>
        </NotesListBox>
      ) : (
        <EmptyNote onClick={handleWrite} />
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
