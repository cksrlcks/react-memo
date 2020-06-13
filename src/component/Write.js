import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { database } from "../firebase";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const auth = useSelector((state) => state.firebase.auth);
  const noteRef = database.ref("notes/" + auth.uid);
  const addNote = () => {
    noteRef.push({
      title: title,
      content: content,
    });
  };

  const titleInput = (e) => {
    setTitle(e.target.value);
  };

  const contentInput = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const enroll = (e) => {
    e.preventDefault();

    if (title.length < 1) {
      alert("제목을 입력해주세요");
      return;
    }
    if (content.length < 1) {
      alert("내용을 입력해주세요");
      return;
    }

    addNote();
    setTitle("");
    setContent("");
  };

  const reset = (e) => {
    e.preventDefault();
    setTitle("");
    setContent("");
  };
  return (
    <WriteFrom onSubmit={handleSubmit}>
      <div className="control">
        <button className="btn type_01" onClick={enroll}>
          등록
        </button>
        <button className="btn type_01" onClick={reset}>
          취소
        </button>
      </div>
      <div className="title">
        <input
          placeholder="제목을 입력하세요"
          value={title}
          onChange={titleInput}
        />
      </div>
      <div className="content">
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={contentInput}
        ></textarea>
      </div>
    </WriteFrom>
  );
};

export default Write;

const WriteFrom = styled.form`
  .control {
    display: flex;
    margin-bottom: 1em;
    .btn {
      margin-right: 0.3em;
    }
  }
  .title {
    width: 100%;
    border-bottom: 1px solid #eee;
    margin-bottom: 1em;
    input {
      width: 100%;
      border: none;
      background: none;
      padding: 1em;
      font-family: inherit;
      color: #333;
      font-size: 2em;
      letter-spacing: 0;
      margin-bottom: 0.5em;
      &:focus {
        outline: none;
      }
    }
  }
  textarea {
    width: 100%;
    min-height: 400px;
    border: none;
    padding: 2em;
    font-family: inherit;
    color: #333;
    font-size: 1em;
    &:focus {
      outline: none;
    }
  }
`;
