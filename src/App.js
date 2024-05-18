import './App.css';

import Navbar from './Components/Navbar';
import Personal from './Components/Personal';
import Compteur from './Components/Compteur';
import Education from './Components/Education';
import CvList from './Components/CvList';
import Experience from './Components/Experience';


function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <div className="left-side">
        <CvList></CvList>
        
        
      
      </div>
      <div className="right-side">
        <Personal ></Personal>
        <Education></Education>
        <Experience></Experience>
      </div>
     
    </div>
  );
}

export default App;
