import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import './index.css';
//Redux Thunk: Async middleware for redux
//Redux Devtools: Connects redux app to Redux

//Router has 2 different ways of navigating: Navigate or useNavigate

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<DashboardPage />} />
        <Route path = "/posts" element = {<PostsPage />} />
        <Route path = "*" element ={<Navigate to = "/" />} />
        {/* redirect -- doesn't exists anymore */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
