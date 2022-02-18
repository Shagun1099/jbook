import React, { useEffect, useState } from 'react';
import Company from './components/company/Company';
import CustomMap from './components/map/CustomMap';
import User from './components/users/User';

function App() {

  const [refresh,setRefresh] = useState(0);

  useEffect(() => {
    const user = new User();
    const company = new Company();
    const customMap = new CustomMap('map');
    customMap.addMarker(user);
    customMap.addMarker(company);
  }, [refresh]);

  return (
    <div className='app'>
        <h1>User/Company Location Info</h1>
        <div className='middle'>
         <div className='type'>
           <p>Company</p>
           <span className='color blue'></span>
         </div>
         <div className='type'>
           <p>User</p>
           <span className='color red'></span>
         </div>
         <button onClick={()=>setRefresh(refresh+1)} className='button'>Fetch Other Location</button>
        </div>
      <div
        id='map'
        style={{ height: '70vh',width:'70vw' }}
      ></div>
    </div>
  );
}

export default App;
