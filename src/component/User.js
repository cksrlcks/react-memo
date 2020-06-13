import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";

const User = () => {
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);
  const profile = useSelector((state) => state.firebase.profile);

  function loginWithGoogle() {
    return firebase.login({ provider: "google", type: "popup" });
  }

  function signOut() {
    alert("로그아웃 했습니다.");
    window.location.href = "/";
    return firebase.auth().signOut();
  }

  return (
    <UserBox className="user_box">
      {!isLoaded(auth) ? (
        <></>
      ) : auth.isEmpty ? (
        <button onClick={loginWithGoogle} className="btn type_01">
          로그인
        </button>
      ) : (
        <Profile>
          <button onClick={signOut} className="btn type_01">
            로그아웃
          </button>
          <span className="pic">
            <img src={profile.avatarUrl} className="profile_pic" />
          </span>
          <span className="name">{profile.displayName}</span>
          <span className="email">{profile.email}</span>
        </Profile>
      )}
    </UserBox>
  );
};

export default User;
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
