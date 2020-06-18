import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import EditorJs from "react-editor-js";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import { add_note, reset_note_success } from "../redux/action/noteAction";
import Loader from "react-loader-spinner";
import SuccessAnimation from "../components/Notes/Success";
const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [instance, setInstance] = useState("");
  const { loading, loggedIn, user } = useSelector((state) => state.user);
  const { note_loading, success } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const EDITOR_JS_TOOLS = {
    paragraph: Paragraph,
    header: Header,
  };
  const handleInput = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await instance.save();
    const note_data = { uid: user.uid, title: title, content: data };
    dispatch(add_note(note_data));
    setTitle("");
    instance.clear();
  };

  const data = {
    blocks: [
      {
        type: "paragraph",
        data: {
          text: "내용을 입력해주세요",
        },
      },
    ],
  };

  return (
    <>
      {!loggedIn ? (
        <LoginRequestBox>로그인이 필요합니다.</LoginRequestBox>
      ) : success ? (
        <SuccessAnimation />
      ) : (
        <WriteBox>
          <div className="control">
            <button type="button" className="btn" onClick={handleSubmit}>
              저장
            </button>
            <button type="button" className="btn">
              취소
            </button>
          </div>
          {note_loading ? (
            <Loader
              type="Oval"
              color="#00BFFF"
              height={40}
              width={40}
              className="loader"
            />
          ) : (
            <>
              <div className="input_box title">
                <input
                  type="text"
                  placeholder="제목을 입력하세요"
                  value={title}
                  onChange={handleInput}
                />
              </div>
              <EditorJs
                data={data}
                instanceRef={(instance) => setInstance(instance)}
                tools={EDITOR_JS_TOOLS}
              />
            </>
          )}
        </WriteBox>
      )}
    </>
  );
};

export default Write;

const LoginRequestBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WriteBox = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding-top: 3em;
  .control {
    display: flex;

    .btn {
      padding: 0.6em 1em;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-right: 0.5em;
      margin-bottom: 4em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .title {
    margin-bottom: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #eee;
    font-size: 2em;

    input {
      color: #333;
      width: 100%;
      font-weight: 500;
      &:focus {
        border: none;
        outline: none;
      }
      &::placeholder {
        opacity: 0.8;
      }
    }
  }
`;
