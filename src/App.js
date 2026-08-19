import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/setting';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sitebar={props.state.sitebarPage.sitebar} />
      <div className="app-content">
        <Routes>
          <Route path="/profile" element={<Profile profileData={props.state.profilePage} 
          dispatch={props.dispatch} />} />
          <Route path="/dialogs/*" element={<Dialogs dialogData={props.state.dialogsPage}
          dispatch={props.dispatch} />} />
          <Route path="/news" Component={News} />
          <Route path="/music" Component={Music} />
          <Route path="/settings" Component={Setting} />
        </Routes>
      </div>
    </div>
  );
}



export default App;
