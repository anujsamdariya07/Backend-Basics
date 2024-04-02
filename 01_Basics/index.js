require("dotenv").config();
const express = require("express");
// import express from 'express'
const app = express();
const port = 3000;

const githubData = {
  login: "anujsamdariya07",
  id: 140744056,
  node_id: "U_kgDOCGOVeA",
  avatar_url: "https://avatars.githubusercontent.com/u/140744056?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/anujsamdariya07",
  html_url: "https://github.com/anujsamdariya07",
  followers_url: "https://api.github.com/users/anujsamdariya07/followers",
  following_url:
    "https://api.github.com/users/anujsamdariya07/following{/other_user}",
  gists_url: "https://api.github.com/users/anujsamdariya07/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/anujsamdariya07/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/anujsamdariya07/subscriptions",
  organizations_url: "https://api.github.com/users/anujsamdariya07/orgs",
  repos_url: "https://api.github.com/users/anujsamdariya07/repos",
  events_url: "https://api.github.com/users/anujsamdariya07/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/anujsamdariya07/received_events",
  type: "User",
  site_admin: false,
  name: "Anuj Samdariya",
  company: null,
  blog: "",
  location: "Jabalpur, Madhya Pradesh",
  email: null,
  hireable: null,
  bio: "Passionate web developer dedicated to learning and contributing to open source projects, one line of code at a time. 🚀",
  twitter_username: "anujsamdariya07",
  public_repos: 18,
  public_gists: 0,
  followers: 4,
  following: 4,
  created_at: "2023-07-27T17:24:51Z",
  updated_at: "2024-03-28T05:12:48Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("My name is Anuj");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login here!</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Please subscribe our channel and like the video!</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
