import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import { useSelector, useDispatch } from "react-redux";
import { delete_note, update_note } from "../../redux/action/noteAction";
import EditorJs from "react-editor-js";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Loader from "react-loader-spinner";

//editor_js settings
const EDITOR_JS_TOOLS = {
  paragraph: Paragraph,
  header: Header,
};

const NoteView = ({ note, itemKey }) => {
  const { note_loading } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const instanceRef = useRef(null);

  const [updateTitle, setUpdateTitle] = useState("");
  const [updateData, setUpdateData] = useState("");

  useEffect(() => {
    if (note) {
      setUpdateTitle(note.title);
      setUpdateData(note.content);
    }
  }, [note]);

  const handleInput = (e) => {
    const title = e.target.value;
    setUpdateTitle(title);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateDate = new Date();
    const updateData = await instanceRef.current.save();
    const update_data = {
      title: updateTitle,
      content: updateData,
      updateDate: updateDate.getTime(),
      rupdateDate: -1 * updateDate.getTime(),
    };
    dispatch(update_note(update_data, itemKey));
    instanceRef.current.clear();
    //instanceRef.current.render();
  };

  const handleDelete = () => {
    dispatch(delete_note(itemKey));
  };

  return (
    <NoteViewBox className="right">
      {note_loading ? (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} className="loader" />
      ) : (
        <Scrollbars
          style={{ height: "100%" }}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          <div className="control">
            <button type="button" onClick={handleUpdate} className="btn">
              수정
            </button>
            <button type="button" onClick={handleDelete} className="btn">
              삭제
            </button>
          </div>
          <div className="content">
            <div className="input_box title">
              <input
                type="text"
                placeholder="제목을 입력하세요"
                value={updateTitle}
                onChange={handleInput}
              />
            </div>
            <EditorJs
              data={updateData}
              instanceRef={(el) => (instanceRef.current = el)}
              tools={EDITOR_JS_TOOLS}
              enableReInitialize={true}
            />
          </div>
        </Scrollbars>
      )}
    </NoteViewBox>
  );
};

export default NoteView;

const ControlBox = styled.div``;

const NoteViewBox = styled.div`
  padding-top: 3em;
  .ce-block__content,
  .ce-toolbar__content {
    max-width: 100%;
  }
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
  .content {
    padding: 0 6em;
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
  }
`;
