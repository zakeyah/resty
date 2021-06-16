

import React from 'react';
import Main from './Main'
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component{
 
  render(){
      return (
        <>
        <BrowserRouter>
          <Header/>
          <Main />
          <Footer/>
          </BrowserRouter>
        </>
      );
 }

}

export default App;
