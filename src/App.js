import React from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Navbar/>
        <div className="container"> 
          <Body/>
        </div>
      </div>
    );
  }
}