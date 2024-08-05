import React from "react";
import { Route, Routes, useRoutes } from "react-router";
import Todo from "./Todoo";
import Posts from "./Posts";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Todo />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);
  return (
    <>
      <NavBar />
      {routes}
      {/* <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/posts/" element={<Posts />}>
            <Route path="/posts/:id" element={<Posts />} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes> */}
    </>
  );
};

export default App;
