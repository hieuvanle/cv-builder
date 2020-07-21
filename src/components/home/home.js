import React from "react";
import "./home.css";

import alexandraAvatar from "../../assets/alexandra.jpg";
import duongAvatar from "../../assets/duong.jpg";
import adamAvatar from "../../assets/adam.jpg";
import luisAvatar from "../../assets/luis.jpg";
import thomasAvatar from "../../assets/thomasAvatar.jpg";
import userBackground from "../../assets/user-background.jpg";
import cv4 from "../../assets/cv4.jpg";
import cvPhoto from "../../assets/CV-template-academic-multi-page-outline.png";

import DashBoard from "../dashboard/dashboard";
import { Card, Avatar, Row, Col, Tabs, Input, Button, Popover } from "antd";
import { SmileOutlined, UploadOutlined, TagsOutlined } from "@ant-design/icons";
import Post from "../post/post";
import BriefInfo from "../brief-info/brief-info";

const { TabPane } = Tabs;
const { TextArea } = Input;

const Home = () => {
  const [user, setUser] = React.useState({
    name: "Thomas Nelson",
    avatar: thomasAvatar,
    background: userBackground,
    job: "Software Engineering at Linkedin",
    education: "University of St.Thomas",
  });
  const userInfo = () => (
    <BriefInfo
      name={user.name}
      avatar={user.avatar}
      background={user.background}
      job={user.job}
      education={user.education}
    />
  );
  const [people, setPeople] = React.useState([
    {
      id: 0,
      name: "Alexandra Wilson",
      avatar: alexandraAvatar,
      job: "Software Engineering at Target",
      education: "University of Wisconsin-Madison",
    },
    {
      id: 1,
      name: "Luis Webber",
      avatar: luisAvatar,
      job: "Software Engineering at Amazon",
      education: "University of Minnesota",
    },
    {
      id: 2,
      name: "Duong Nguyen",
      avatar: duongAvatar,
      job: "Software Engineering at FPT",
      education: "Vietnam National University, HCM",
    },
    {
      id: 3,
      name: "Adam Nelson",
      avatar: adamAvatar,
      job: "Software Engineering at ArchitectNow",
      education: "University of Texas-Dallas",
    },
  ]);
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      author: "Adam Nelson",
      timestamp: "3 hours ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: adamAvatar,
      photo: null,
      likeQuantity: 54,
      commentQuantity: 23,
      shareQuantity: 30,
      comments: [
        {
          author: "Alexandra Wilson",
          avatar: alexandraAvatar,
          content: "Quis hendrerit dolor magna eget est!",
        },
        {
          author: "Luis Webber",
          avatar: luisAvatar,
          image: null,
          content:
            "In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.",
        },
      ],
    },
    {
      id: 2,
      author: "Duong Nguyen",
      timestamp: "2 hours ago",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      photo: cvPhoto,
      image: duongAvatar,
      likeQuantity: 78,
      commentQuantity: 42,
      shareQuantity: 15,
      comments: [],
    },
    {
      id: 3,
      author: "Luis Webber",
      timestamp: "5 hours ago",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photo: null,
      image: luisAvatar,
      likeQuantity: 31,
      commentQuantity: 16,
      shareQuantity: 5,
      comments: [
        {
          author: "Adam Nelson",
          avatar: adamAvatar,
          image: null,
          content: "Sit amet volutpat consequat!",
        },
      ],
    },
  ]);
  return (
    <DashBoard title="Home" home>
      <div className="home-container">
        <Row>
          <Col span={15}>
            <Card style={{ width: 700 }}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Create post" key="1">
                  <div className="status-body">
                    <Popover content={userInfo} trigger="hover">
                      <Avatar
                        src={user.avatar}
                        size={40}
                        style={{ cursor: "pointer" }}
                      />
                    </Popover>
                    <TextArea
                      placeholder="What's on your resume?"
                      autoSize={{ minRows: 1, maxRows: 6 }}
                      style={{
                        border: "none",
                        marginLeft: "0.2rem",
                        marginTop: "0.5rem",
                        height: "120%",
                      }}
                    />
                  </div>
                  <div className="status-footer">
                    <div className="footer">
                      <Button shape="round" icon={<SmileOutlined />}>
                        Feeling/Activity
                      </Button>
                      <Button shape="round" icon={<UploadOutlined />}>
                        Upload photos
                      </Button>
                      <Button shape="round" icon={<TagsOutlined />}>
                        Tag peoples
                      </Button>
                    </div>
                    <div className="footer">
                      <Button shape="round" type="primary">
                        Post
                      </Button>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </Card>
            {posts.map((post) => (
              <Post
                key={post.id}
                user={user}
                author={post.author}
                timestamp={post.timestamp}
                content={post.content}
                photo={post.photo}
                image={post.image}
                likeQuantity={post.likeQuantity}
                commentQuantity={post.commentQuantity}
                shareQuantity={post.shareQuantity}
                comments={post.comments}
              ></Post>
            ))}
          </Col>
          <Col span={9}>
            <Card style={{ width: 350 }}>
              <h3 style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                People you may know
              </h3>
              {people.map((person, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    marginBottom: "0.7rem",
                  }}
                >
                  <Avatar
                    src={person.avatar}
                    size={40}
                    style={{ cursor: "pointer" }}
                  />
                  <div style={{ marginLeft: "0.5rem" }}>
                    <h4
                      style={{
                        marginBottom: "0",
                        fontSize: "14px",
                        lineHeight: "19px",
                        fontWeight: "600",
                      }}
                    >
                      {person.name}
                    </h4>
                    <p>{person.job}</p>
                  </div>
                </div>
              ))}
              <h3 style={{ margin: 0 }}>Top liked CV</h3>
              <img
                src={cv4}
                style={{
                  height: "20rem",
                  width: "15rem",
                  margin: "0.5rem auto",
                }}
                alt="cv"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </DashBoard>
  );
};

export default Home;
