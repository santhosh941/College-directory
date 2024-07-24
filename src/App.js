import LoginComponent from './components/login';
import Header from './components/header';
import StudentProfile from './components/MenuIcon';
import StudentProfileComponent from './components/MenuIcon';
import { BrowserRouter as Router,Routes, Route, BrowserRouter} from 'react-router-dom';
import StudentDashboard from './components/studentdash';
import FacultyDashboard from './components/staffdash';
import AdminDashboard from './components/admindash';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path='' Component={LoginComponent}/>
      <Route exact path='/login/staffdash' Component={FacultyDashboard}/>
      <Route exact path='/login/Studentdash' Component={StudentDashboard}/>
      <Route exact path='/login/admindash' Component={AdminDashboard}/>
      </Routes>
      </BrowserRouter>
       </div>
  
  );
}

export default App;
