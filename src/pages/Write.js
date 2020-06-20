import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import EditorJs from "react-editor-js";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import { add_note } from "../redux/action/noteAction";
import Loader from "react-loader-spinner";
import SuccessAnimation from "../components/Notes/Success";
import Button from "../components/ui/Button";
import "../css/editor.scss";
//editor_js settings
const EDITOR_JS_TOOLS = {
  paragraph: Paragraph,
  header: Header,
};

const Write = () => {
  const dispatch = useDispatch();
  const instanceRef = useRef(null);
  const createDate = new Date();

  const { loading, loggedIn, user } = useSelector((state) => state.user);
  const { note_loading, success } = useSelector((state) => state.notes);

  const [title, setTitle] = useState("");
  const [editorData, setEditorData] = useState(defaultMent);

  const defaultMent = {
    blocks: [
      {
        type: "header",
        data: {
          text: "제목을 입력해주세요",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "내용을 입력해주세요",
        },
      },
    ],
  };

  const handleInput = useCallback((e) => {
    const title = e.target.value;
    setTitle(title);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await instanceRef.current.save();
    const note_data = {
      uid: user.uid,
      content: data,
      date: createDate.getTime(),
      rdate: -1 * createDate.getTime(),
    };
    dispatch(add_note(note_data));

    //reset
    handleReset();
  };
  const handleReset = () => {
    setTitle("");
    instanceRef.current.clear();
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
            <Button type="button" onClick={handleSubmit} label="저장" />
            <Button type="button" onClick={handleReset} label="취소" />
          </div>
          {note_loading ? (
            <Loader type="Oval" color="#00BFFF" height={40} width={40} className="loader" />
          ) : (
            <EditorJs data={defaultMent} instanceRef={(el) => (instanceRef.current = el)} tools={EDITOR_JS_TOOLS} />
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
    button {
      margin-right: 0.5em;
      margin-bottom: 4em;
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
