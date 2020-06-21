import React from "react";
import styled from "styled-components";
const NoUser = ({ onClick }) => {
  return (
    <NoUserBox>
      <span className="icon">👋</span>
      <p className="title">노트를 작성해보세요</p>
      <p className="sub_title">로그인 후 이용가능합니다.</p>
      <button className="login" type="button" onClick={onClick}>
        로그인하기
      </button>
    </NoUserBox>
  );
};

export default NoUser;

const NoUserBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
