import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";
import CardsMain from './component/main/CardsMain';
import ParaMain from './component/main/ParaMain';
import UnorderList from './component/unorderList/UnorderList';
import Heart from './component/heart/Heart';

function App() {


  return (
    <div>
   {/* <CardsMain/>
   <ParaMain/>
   <UnorderList/> */}
   <Heart/>
    </div>
  );
}

export default App;
