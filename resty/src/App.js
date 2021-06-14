

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Results from './Results'
// import './App.css';






// function App() {
//   return (
//     <React.Fragment>
//       <Header/>
//       <Form data="ffffff"/>
//       <Footer/>
//     </React.Fragment>
//   );
// }
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      headers:{},
      // count:0,
      results:{},
      
    }
  }

  handleForm=(data, headers) => {
    // console.log('results...........',headers,'data......',data)
    this.setState({results:data.body, headers:headers});
    // console.log(this.state)
}

  render(){
      return (
        <>
      
          <Header/>
          <Form  handler={this.handleForm}/>
          <Results data={this.state}  />
          <Footer/>
        </>
      );
 }

}

export default App;
