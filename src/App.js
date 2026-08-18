import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/setting';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-content">
          <Routes>
          <Route path="/profile" Component={Profile} />
          <Route path="/dialogs" Component={Dialogs} />
          <Route path="/news" Component={News} />
          <Route path="/music" Component={Music} />
          <Route path="/settings" Component={Setting} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
