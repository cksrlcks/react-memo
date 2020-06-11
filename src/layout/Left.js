import React, { useEffect, useState } from "react";
import Todos from "../component/Todos";
import TabNotes from "../component/TabNotes";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
const Left = () => {
  const [activeView, setActiveView] = useState(1);
  //const [notes, setNotes] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/data/data.json")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setNotes(res.data);
    //   })
    //   .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <LeftBox className="left">
      <ul className={activeView == 1 ? "tab" : "tab view_02"}>
        <li
          className={activeView == 1 ? "on" : ""}
          onClick={() => setActiveView(1)}
        >
          Todos
        </li>
        <li
          className={activeView == 2 ? "on" : ""}
          onClick={() => setActiveView(2)}
        >
          Notes
        </li>
      </ul>
      <div className="tab_view">
        <Scrollbars style={{ height: "100%" }} autoHide>
          {activeView == 1 ? <Todos /> : <TabNotes />}
        </Scrollbars>
      </div>
    </LeftBox>
  );
};

export default Left;
const LeftBox = styled.aside`
  display: flex;
  flex-direction: column;
  display: flex;
  .tab_view {
    height: calc(100% - 40px);
    overflow-y: auto;
    .inner {
      padding: 0 0.8em;
    }
  }
  .tab {
    height: 40px;
    margin: 1em;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    margin-bottom: 1em;
    position: relative;
    border-radius: 9999px;
    overflow: hidden;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 50%;
      height: 100%;
      background: #1890ff;
      border-radius: 9999px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
      transition: all 0.2s;
    }
    &.view_02:before {
      left: 50%;
    }
    li {
      color: #888;
      width: 50%;
      flex: 0 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;
      cursor: pointer;
      &.on {
        color: #fff;
      }
    }
  }
`;
