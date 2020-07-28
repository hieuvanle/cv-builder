import React from "react";
import "./post.css";

import { Card, Avatar, Button, Input, Popover } from "antd";
import {
  HeartOutlined,
  HeartTwoTone,
  CommentOutlined,
  ShareAltOutlined,
  CameraFilled,
} from "@ant-design/icons";
import BriefInfo from "../brief-info/brief-info";

const Post = ({
  user,
  author,
  timestamp,
  content,
  photo,
  image,
  likeQuantity,
  commentQuantity,
  shareQuantity,
  comments,
}) => {
  const [likeToggled, setLikeToggled] = React.useState(false);
  const likeToggler = () => {
    setLikeToggled(!likeToggled);
  };
  const userInfo = () => (
    <BriefInfo
      name={user.name}
      avatar={user.avatar}
      background={user.background}
      job={user.job}
      education={user.education}
    />
  );
  return (
    <Card style={{ width: 700, marginTop: "2rem" }}>
      <div className="post-header">
        <Avatar src={image} size={40} style={{ cursor: "pointer" }} />
        <div style={{ marginLeft: "0.5rem" }}>
          <h4
            style={{
              marginBottom: "0",
              fontSize: "14px",
              lineHeight: "19px",
              fontWeight: "600",
            }}
          >
            {author}
          </h4>

          <small>{timestamp}</small>
        </div>
      </div>
      <div className="post-body">
        <div>{content}</div>
        {photo ? (
          <div style={{ background: "#f2f3f5", padding: "16px" }}>
            <img
              src={photo}
              alt="cvPhoto"
              style={{ height: "15rem", width: "20rem", marginLeft: "10rem" }}
            />
          </div>
        ) : null}
      </div>
      <div className="post-footer">
        <div className="footer-buttons">
          <Button
            shape="round"
            icon={likeToggled ? <HeartTwoTone /> : <HeartOutlined />}
            onClick={likeToggler}
          >
            {likeQuantity}
          </Button>
          <Button shape="round" icon={<CommentOutlined />}>
            {commentQuantity}
          </Button>
          <Button shape="round" icon={<ShareAltOutlined />}>
            {shareQuantity}
          </Button>
        </div>

        <div className="footer-write-comment">
          <Popover content={userInfo} trigger="hover">
            <Avatar
              src={user.avatar}
              size={40}
              style={{ marginTop: "0.4rem", cursor: "pointer" }}
            />
          </Popover>
          <Input
            placeholder="Write a comment..."
            style={{
              borderRadius: "12px",
              marginLeft: "0.2rem",
              marginTop: "0.5rem",
              height: "90%",
              width: "99%",
            }}
            suffix={
              <Button
                shape="circle"
                icon={<CameraFilled />}
                style={{
                  height: "2rem",
                  border: "none",
                  padding: "0",
                }}
              />
            }
          />
        </div>
        <div className="footer-comments">
          {comments.map((comment, index) => (
            <div className="post-header" key={index}>
              <Avatar
                src={comment.avatar}
                size={40}
                style={{ cursor: "pointer" }}
              />
              <div
                className="footer-comments-content"
                style={{
                  marginLeft: "0.5rem",
                  backgroundColor: "#f2f3f5",
                  padding: "8px",
                  borderRadius: "12px",
                  display: "flex",
                  maxHeight: "40px",
                }}
              >
                <h4
                  style={{
                    marginBottom: "0",
                    height: "auto",
                    fontSize: "14px",
                    lineHeight: "19px",
                    fontWeight: "600",
                  }}
                >
                  {comment.author}
                </h4>
                <p style={{ marginLeft: "0.3rem" }}>{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Post;
