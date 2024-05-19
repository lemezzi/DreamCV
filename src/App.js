import './App.css';

import Navbar from './Components/Navbar';
import Personal from './Components/Personal';
import Education from './Components/Education';
import CvList from './Components/CvList';
import Experience from './Components/Experience';
import Competi from './Components/Competi';
import Langue from './Components/Langue';


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
        <Competi></Competi>
       <Langue></Langue>       
      </div>
     
    </div>
  );
}

export default App;
