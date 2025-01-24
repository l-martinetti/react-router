import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import PostList from './pages/PostListPage';
import DefaultLayout from './layouts/DefaultLayout';
import PostDeatails from "./pages/PostDeatailsPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/chi-siamo" Component={About} />
            <Route path="/lista-post" Component={PostList} />
            <Route path="/lista-post/id" Component={PostDeatails} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
