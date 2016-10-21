import React from 'react';
import SearchGithub from './SearchGithub';

const Main = ({history, children}) => {
  var header={
  backgroundColor: "rgba(255,255,255,0.5)",
  border: "none"
 }
  return(
    <div  className="main-container">
      <nav style={header} className="navbar navbar-default" role="navigation">
      <div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
        <SearchGithub history={history}/>
      </div>
      </nav>
      <div className="container">
      {children}
      </div>
    </div>
  )
}

export default Main;
