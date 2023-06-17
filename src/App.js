import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


import Body from './body/body';
import Footer from './footer/footer';
function App() {
  return (
    <Router>
  

      
      <Routes>

        <Route  path="/" exact > <Body/> </Route>
        <Route path="/body" exact> <Body/></Route>
        <Route  path="/footer"  exact><Footer/> </Route>
        

        
        </Routes>

  </Router>
  );
}

export default App;
