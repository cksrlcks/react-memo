import React from "react";
import styled from "styled-components";

const EmptyNote = ({ onClick }) => {
  return (
    <EmptyNoteBox>
      <span className="icon">🤭</span>
      <p className="title">작성된 노트가 없습니다</p>
      <p className="sub_title">첫 노트를 작성해보세요.</p>
      <button className="login" type="button" onClick={onClick}>
        작성하기
      </button>
    </EmptyNoteBox>
  );
};

export default EmptyNote;

const EmptyNoteBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .icon {
    display: block;
    margin-bottom: 1em;
    font-size: 4em;
  }
  .title {
    color: rgb(134, 142, 150);
    font-size: 1.5em;
    font-weight: 500;
    margin-bottom: 0.6em;
  }
  .sub_title {
    color: rgb(134, 142, 150);
    letter-spacing: -0.05em;
    margin-bottom: 3em;
    font-size: 1.1em;
  }
  .login {
    background: #1890ff;
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    padding: 0.6em 2.8em;
    text-align: center;
    border-radius: 9999px 9999px;
    letter-spacing: -0.05em;
  }
`;
