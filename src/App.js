import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/StudentLogin';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AdminLogin/>}/>
      <Route path='/studlogin' element={<StudentLogin/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
