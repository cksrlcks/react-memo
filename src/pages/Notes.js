import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Notes = () => {
  const { loading, loggedIn, user } = useSelector((state) => state.user);

  return (
    <>
      {!loggedIn ? (
        <LoginRequestBox>로그인이 필요합니다.</LoginRequestBox>
      ) : (
        <div>Note page</div>
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
