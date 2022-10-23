import { useState, useEffect } from 'react';
import RenderCount from '../UI/RenderCount.js';

export default function MyModules() {
  // Initialisation ------------------------------
  const loggedinUserID = 279;
  const endpoint = `/modules/users/${loggedinUserID}`;

  // State ---------------------------------------
  const [modules, setModules] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState('Loading records ...');

  // Context -------------------------------------
  // Methods -------------------------------------
  const apiCall = async (endpoint) => {
    const URL = 'http://localhost:5000/api';
    const endpointAddress = URL + endpoint;
    const response = await fetch(endpointAddress);
    const result = await response.json();
    setModules(result);
  };
  
  useEffect(() => { apiCall(endpoint) }, [endpoint]);
      
  // View ----------------------------------------
  return (
    <section>
      <RenderCount background="Yellow" fontColor="Black" />
      <h1>My Modules</h1>
      {
        !modules 
          ? <p>{loadingMessage}</p>
          : modules.length === 0
            ? <p>No modules found</p>
            : modules.map((module) => 
                <p key={module.ModuleCode}>{module.ModuleCode} {module.ModuleName}</p>
              )
      }
    </section>
  );
}
