import { useState, useEffect } from 'react';
import API from '../api/API.js';
import ModulePanels from '../entities/modules/ModulePanels.js';

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
    const response = await API.get(endpoint);
    response.isSuccess
      ? setModules(response.result)
      : setLoadingMessage(response.message)
  };
  
  useEffect(() => { apiCall(endpoint) }, [endpoint]);
      
  // View ----------------------------------------
  return (
    <section>
      <h1>My Modules</h1>
      {
        !modules 
          ? <p>{loadingMessage}</p>
          : modules.length === 0
            ? <p>No modules found</p>
            : <ModulePanels modules={modules} />
      }
    </section>
  );
}
