import React, { useEffect } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../asset/confetti.json";
import { useDispatch } from "react-redux";
import { success_reset } from "../../redux/action/noteAction";
import styled from "styled-components";
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const SuccessAnimation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(success_reset());
    }, 2000);
  }, []);

  return (
    <AlertBox>
      <Lottie options={defaultOptions} height={376} width={470} />
      <div className="text_box">
        <p className="title">성공적으로 저장되었습니다.</p>
        <p>작성페이지로 돌아갑니다.</p>
      </div>
    </AlertBox>
  );
};

export default SuccessAnimation;

const AlertBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: -4em;
  .text_box {
    p {
      font-size: 1.2em;
      opacity: 0.6;
      margin-bottom: 1em;
      &.title {
        color: #111;
        font-size: 1.4em;
        font-weight: 500;
      }
    }
  }
`;
