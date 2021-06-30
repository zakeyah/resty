
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Form from './Form';
import Results from './Results'
import History from './History'

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      headers:{},
      count:0,
      results:{},
      savelocal:JSON.parse(localStorage.getItem('query')) || [],
      ChosenQuery:{method:'',url:''},
      flag :false,
    }
  }
  
  handleForm=(data, headers) => {
    this.setState({results:data.body, headers:headers});
}
handelSave=(data)=>{
  let flag=true
  for(let i=0 ;i<this.state.savelocal.length;i++){
    if(this.state.savelocal[i].method===data.method && this.state.savelocal[i].url===data.url){
      flag=false;
    }
  }
  if(flag===true){
    this.setState({savelocal: [...this.state.savelocal,data]});
    localStorage.setItem('query',JSON.stringify(this.state.savelocal));
  }
}
handelChosen=(data)=>{
  this.setState({ChosenQuery:data})
}
handelReset=()=>{
  this.setState({ChosenQuery:{method:'',url:''}})
}
toggle = () => {
  this.setState({flag: !this.state.flag});
  console.log(this.state.flag)
}
  render(){
      return (
        <>
       
          <Switch>
          <Route exact path="/">
          <Form  handler={this.handleForm} save={this.handelSave} data={this.state} reset={this.handelReset} handelToggle={this.toggle}/>
          <Results data={this.state}   />
          </Route>
          <Route exact path="/history">
          <History   data={this.state.savelocal} chosen={this.handelChosen} />
          </Route>
          </Switch>
        
        </>
      );
 }

}

export default Main;