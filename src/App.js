import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import NoticeBar from './components/NoticeBar/NoticeBar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NoticeBar />} />
      <Route path="/" element={<NavBar />} />
    </Routes>
  );
}

export default App;
