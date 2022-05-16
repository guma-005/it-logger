

import React, {useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import TechListModal from './components/techs/TechListModal';

import AddTechModal from './components/techs/AddTechModal';
const App = () =>{
  useEffect(()=>{
    //initialize materialize JS
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar/>
      <div className='container'>
      <AddBtn />
      <AddLogModal /> 
      <EditLogModal/>
      <AddTechModal/>
      <TechListModal/>
      <Logs/>        
      </div>
    </Fragment>
  );
}

export default App;
