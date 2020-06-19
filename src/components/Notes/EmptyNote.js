import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import * as animationData from "../../asset/empty.json";
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const EmptyNote = () => {
  return (
    <EmptyNoteBox>
      <Lottie options={defaultOptions} height={244} width={360} />
      <p>작성된 노트가 없습니다.</p>
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
  p {
    margin-top: 2em;
    font-size: 1.2em;
    opacity: 0.6;
  }
`;
