
import { useEffect, useState } from 'react';
import './App.css';
import FetchData from './componants/FetchData';
import Loader from './componants/Loader';
import DisplayUser from './componants/DisplayUser';

function App() {

  const [userData, setUserData] = useState(null);
  useEffect(()=>{FetchData().then(post => setInterval(() => {
    setUserData(post)
  }, 5000) )}, [])



  return (
    <div className="App">
    {userData ? <div className="UsersDetail-container">{( userData.map((user, index)=><DisplayUser key={index} id={user.id} name={user.name} email={user.email} companyName={user.company.name} />) )}</div> : ( <Loader /> )}
    </div>
  );
}

export default App;
