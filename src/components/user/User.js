import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logIn, logOut } from "../../redux/action/userAction";

const User = ({ history }) => {
  const { loading, loggedIn, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <UserBox className="user_box">
      {!loggedIn ? (
        <button
          className="btn type_01"
          onClick={() => {
            history.push("/User");
          }}
        >
          로그인
        </button>
      ) : (
        <Profile>
          <button className="btn type_01" onClick={() => dispatch(logOut())}>
            로그아웃
          </button>
          <span className="pic">
            <img src={user.photoURL} className="profile_pic" />
          </span>
          <span className="name">{user.displayName}</span>
          <span className="email">{user.email}</span>
        </Profile>
      )}
    </UserBox>
  );
};

export default withRouter(User);
const UserBox = styled.div`
  margin-left: 20px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  .name {
    margin-right: 1em;
    font-weight: 500;
    font-size: 1em;
  }
  .email {
    font-size: 0.9em;
  }

  .pic {
    margin-right: 1em;
    width: 30px;
    height: 30px;
    border-radius: 30px 30px;
    overflow: hidden;
    .profile_pic {
      width: 30px;
      height: 30px;
    }
  }
`;
