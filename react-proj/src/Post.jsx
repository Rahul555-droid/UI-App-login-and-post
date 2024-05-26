import React, { useState } from "react";
import styled from "styled-components";
import { FiMoreHorizontal, FiMessageCircle } from "react-icons/fi";

// Styles for Post component
const PostContainer = styled.div`
  width: 700px;
  height: auto;
  background: #27292d;
  border: 2px solid #35373b;
  border-radius: 8px;
  margin: 20px auto;
  padding: 20px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  margin-right: 10px;
`;

const UserName = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #c5c7ca;
`;

const TimeAgo = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #7f8084;
`;

const MoreOptions = styled(FiMoreHorizontal)`
  color: #c5c7ca;
  cursor: pointer;
`;

const Content = styled.div`
  background: #191920;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Emoji = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #7f8084;
  margin: 0;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CommentsIcon = styled(FiMessageCircle)`
  color: #c5c7ca;
  margin-right: 5px;
`;

const CommentsText = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #7f8084;
`;

const Post = ({ post }) => {
  return (
    <PostContainer>
      <Header>
        <UserDetails>
          <Avatar imageUrl={post.avatar} />
          <UserName>
            <Name>{post.userName}</Name>
            <TimeAgo>
              {post.timeAgo} {post.isEdited ? " • Edited" : ""}{" "}
            </TimeAgo>
          </UserName>
        </UserDetails>
        <MoreOptions />
      </Header>
      <Content>
        <Emoji>{post.emoji}</Emoji>
        <Text>{post.text}</Text>
      </Content>
      <Footer>
        <CommentsIcon />
        <CommentsText>{post.comments} comments</CommentsText>
      </Footer>
    </PostContainer>
  );
};

// Styles for CreatePost component
const CreatePostContainer = styled.div`
  width: 700px;
  background: #27292d;
  border: 2px solid #35373b;
  border-radius: 8px;
  margin: 20px auto;
  padding: 20px;
`;

const CreatePostHeader = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #c5c7ca;
  margin-bottom: 20px;
`;

const CreatePostInput = styled.div`
  background: #1c1e21;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const InputEmoji = styled.div`
  font-size: 24px;
  margin-right: 10px;
  color: #7f8084;
`;

const InputText = styled.input`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #7f8084;
  background: transparent;
  border: none;
  flex: 1;
  outline: none;

  &::placeholder {
    color: #7f8084;
  }
`;

const PostButton = styled.button`
  width: 100px;
  padding: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background: #4a96ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    background: #3a86f0;
  }
`;

const CreatePost = ({ onHandlePostClick }) => {
  const [text, setText] = useState("");
  return (
    <CreatePostContainer>
      <CreatePostHeader>Create post</CreatePostHeader>
      <CreatePostInput>
        <InputEmoji>💬</InputEmoji>
        <InputText
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="How are you feeling today?"
        />
      </CreatePostInput>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <PostButton
          onClick={(e) => {
            onHandlePostClick(text);
            setText("");
          }}
        >
          Post
        </PostButton>
      </div>
    </CreatePostContainer>
  );
};

const HelloJaneHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #c5c7ca;
  margin-bottom: 10px;
`;

const TopHeader = () => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-start", width: "48vw" }}
      >
        <HelloJaneHeader> Hello Jane </HelloJaneHeader>
      </div>

      <div
        style={{ display: "flex", justifyContent: "flex-start", width: "48vw" }}
      >
        <Text>
          How are you doing today? Would you like to share something with the
          community 🤗
        </Text>
      </div>
    </>
  );
};

export { Post, CreatePost, TopHeader };
