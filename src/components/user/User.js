import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logIn, logOut } from "../../redux/action/userAction";
import Button from "../ui/Button";
const User = ({ history }) => {
  const { loading, loggedIn, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    history.push("/User");
  };
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <UserBox className="user_box">
      {!loggedIn ? (
        <Button type="button" label="로그인" onClick={handleLogin} />
      ) : (
        <Profile>
          <Button type="button" label="로그아웃" onClick={handleLogOut} />
          {user && user.photoURL && (
            <span className="pic">
              <img src={user.photoURL} className="profile_pic" />
            </span>
          )}
          <span className="name">{user && user.displayName}</span>
          <span className="email">{user && user.email}</span>
        </Profile>
      )}
    </UserBox>
  );
};

export default withRouter(User);
const UserBox = styled.div`
  margin-left: 20px;
  button {
    margin-right: 2em;
  }
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
