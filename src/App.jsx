import { useEffect, useState } from "react";
import Posts from "./pages/Posts";
import { Routes, Route, Router } from 'react-router-dom';
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreateNewPost from "./pages/CreateNewPost";
import GlobalLayout from "./layouts/GlobalLayout";
import Todo from "./pages/Todo";
import Users from "./pages/Users";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <GlobalLayout>
          <Home />
          </GlobalLayout>
        } />

      <Route path="/todos" element={
        <GlobalLayout>
          <Todo />
          </GlobalLayout>
        } />

<Route path="/posts" element={
        <GlobalLayout>
          <Posts />
          </GlobalLayout>
        } />

<Route path="/posts/:id" element={
        <GlobalLayout>
          <PostDetails />
          </GlobalLayout>
        } />

<Route path="/create/post" element={
        <GlobalLayout>
          <CreateNewPost />
          </GlobalLayout>
        } />

<Route path="/users" element={
        <GlobalLayout>
          <Users />
          </GlobalLayout>
        } />


    </Routes>
  )
}

export default App
