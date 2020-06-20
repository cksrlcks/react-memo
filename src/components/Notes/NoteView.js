import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import { useSelector, useDispatch } from "react-redux";
import { delete_note, update_note } from "../../redux/action/noteAction";
import EditorJs from "react-editor-js";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Loader from "react-loader-spinner";
import Button from "../ui/Button";

//editor_js settings
const EDITOR_JS_TOOLS = {
  paragraph: Paragraph,
  header: Header,
};

const NoteView = ({ itemKey, note }) => {
  const { note_loading, notes, nowKey } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const instanceRef = useRef(null);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateDate = new Date();
    const updateData = await instanceRef.current.save();
    const update_data = {
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
        <Scrollbars style={{ height: "100%" }} autoHide autoHideTimeout={1000} autoHideDuration={200}>
          <div className="control">
            <Button type="button" onClick={handleUpdate} label="수정" />
            <Button type="button" onClick={handleDelete} label="삭제" />
          </div>
          <div className="content">{note && <EditorJs data={note.content} enableReInitialize={true} instanceRef={(el) => (instanceRef.current = el)} tools={EDITOR_JS_TOOLS} />}</div>
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
    button {
      margin-right: 0.5em;
      margin-bottom: 4em;
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
