import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import NoteItem from "../components/Notes/NoteItem";
import Lottie from "react-lottie";
import * as animationData from "../asset/empty.json";
const Notes = () => {
  const dispatch = useDispatch();
  const { note_loading, notes } = useSelector((state) => state.notes);
  const { loading, loggedIn, user } = useSelector((state) => state.user);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {}, [notes]);
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
                <EmptyNote>
                  <Lottie options={defaultOptions} height={244} width={360} />
                  <p>작성된 노트가 없습니다.</p>
                </EmptyNote>
              ) : (
                Object.keys(notes).map((key, index) => (
                  <NoteItem note={notes[key]} key={key} />
                ))
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
const EmptyNote = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  p {
    margin-top: 2em;
    font-size: 1.2em;
    opacity: 0.6;
  }
`;
