

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Results from './Results'
import History from './History'

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
      savelocal:JSON.parse(localStorage.getItem('query')) || [],
      ChosenQuery:{method:'',url:''},
      flag :false,
      
    }
  }
  
  handleForm=(data, headers) => {
    // console.log(this.state.flag,'hhhhhhhhhhhhhhhhhhhhhhhhhhh')
    // console.log('results...........',headers,'data......',data)
    this.setState({results:data.body, headers:headers});
    // console.log(this.state)
}
handelSave=(data)=>{
  let flag=true
  // console.log(data)
  for(let i=0 ;i<this.state.savelocal.length;i++){
    if(this.state.savelocal[i].method===data.method && this.state.savelocal[i].url===data.url){
      flag=false;
      console.log(flag)
    }

  }
  if(flag===true){
    console.log(flag)
    this.setState({savelocal: [...this.state.savelocal,data]});

    localStorage.setItem('query',JSON.stringify(this.state.savelocal));
  }
  // console.log(this.state.savelocal)
}
handelChosen=(data)=>{
  this.setState({ChosenQuery:data})
}
handelReset=()=>{
  this.setState({ChosenQuery:{method:'',url:''}})
  // console.log(this.state.ChosenQuery,'............ handel reser')
}
toggle = () => {
  this.setState({flag: !this.state.flag});
  // console.log(this.state.flag,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;')
}
  render(){
      return (
        <>
      
          <Header/>
          <Form  handler={this.handleForm} save={this.handelSave} data={this.state} reset={this.handelReset} handelToggle={this.toggle}/>
          <Results data={this.state}   />
          <History   data={this.state.savelocal} chosen={this.handelChosen} />

          <Footer/>
        </>
      );
 }

}

export default App;
