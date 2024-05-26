import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Post, CreatePost, TopHeader } from "./Post";
import LoginRegisterForm from "./LoginRegisterForm";

const defaultPostDataArr = [
  {
    avatar: `${process.env.PUBLIC_URL}/theresa.png`,
    userName: "Theresa Webb",
    timeAgo: "5mins ago",
    emoji: "👋",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
    isEdited: false,
  },
  {
    avatar: `${process.env.PUBLIC_URL}/marvin.png`,
    userName: "Marvin McKinney",
    timeAgo: "8mins ago",
    emoji: "😔",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
    isEdited: true,
  },
];


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #1c1e21;
  position: relative;
  overflow: auto;
`;





const Login = () => {
  const [showLoginRegisterForm, setShowLoginRegisterForm] = useState(false);
  const [
    doNotShowLoginFormAsHeHasClickedLogin,
    setDoNotShowLoginFormAsHeHasClickedLogin,
  ] = useState(false);
  const [postDataArr, setPostDataArr] = useState(defaultPostDataArr);

  const handlePageClick = () => {
    if (!doNotShowLoginFormAsHeHasClickedLogin) {
      setShowLoginRegisterForm(true);
    }
  };

  const handleClose = () => {
    setShowLoginRegisterForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginRegisterForm(false);
    setDoNotShowLoginFormAsHeHasClickedLogin(true);
  };

  const onHandlePostClick = (postDataText) => {
    if (!doNotShowLoginFormAsHeHasClickedLogin) return;

    const newPostData = {
      avatar: `${process.env.PUBLIC_URL}/jane.jpg`,
      userName: "Jane",
      timeAgo: "just now",
      emoji: "👋",
      text: postDataText,
      comments: 0,
      isEdited: false,
    };

    setPostDataArr((prev) => [newPostData, ...prev]);
  };

  return (
    <Container onClick={handlePageClick}>
      <TopHeader />
      <CreatePost onHandlePostClick={onHandlePostClick} />
      {postDataArr.map((el, index) => (
        <Post key={index} post={el} />
      ))}
      {showLoginRegisterForm && (
        <LoginRegisterForm
          onClose={handleClose}
          handleLoginClick={handleLoginClick}
        />
      )}
    </Container>
  );
};

export default Login;
