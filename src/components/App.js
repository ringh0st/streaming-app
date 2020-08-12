import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom'
function App() {

  const pageOne=()=>{
    return <div>Page One</div>
  }
  const pageTwo=()=>{
    return <div>Page Two</div>
  }
  return (
    <div>
      <BrowserRouter>
      <div>
      <Route path="/" exact component={pageOne}/>
      <Route path="pagetwo" component={pageTwo}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
