import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HackathonPage from './pages/HackathonPage/HackathonPage';
import Form from './pages/Form/Form';
import Layout from './Layout'; 
import DetailInfo from './pages/DetailInfo/DetailInfo';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HackathonPage />} />
          <Route path="create" element={<Form />} />
          <Route path="edit/:id" element={<Form />} />
          <Route path="/detail/:id" element={<DetailInfo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
