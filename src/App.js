import React from 'react'
import { Route, Routes } from 'react-router'
import Todo from './Todoo'
import Posts from './Posts'
import NavBar from './NavBar'
import NotFound from './NotFound'

const App = () => {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/posts/" element={<Posts />}>
            <Route path="/posts/:id" element={<Posts />} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </>
    );
}

export default App