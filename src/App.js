import React from 'react';
import FullName from './component/profile/FullName'
import Adress from './component/profile/Adress'
import ProfilePhoto from './component/profile/ProfilePhoto'
import './App.css';


function App() {
  return (
    <div className="App">
     <div className="component">
     <FullName/>
       <Adress/>
       </div>
     <div className="component-img">
     <ProfilePhoto/>
     </div>
    </div>
  );
}

export default App;
