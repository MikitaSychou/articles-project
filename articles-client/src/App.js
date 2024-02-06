import './App.css';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div id='page-body'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/articles' element={<ArticlesListPage/>} />
          <Route path='/articles/:articleId' element={<ArticlePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/create-account' element={<CreateAccountPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
       </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
