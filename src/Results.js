import React from 'react';
import ReactJson from 'react-json-view'
import {If,Else} from './If'
import './Results.scss'




  class Results extends React.Component {
      render(){
        return (

          <>
          <Else condition={this.props.data.flag} condition2={this.props.data.headers}>
          <div id="output">

       
                  <ReactJson src={this.props.data.headers} name="headers" />
                  <ReactJson src={this.props.data.results} name="response" />
        
           </div>
       
          </Else>
          <If condition={this.props.data.flag} >
          <div id="output">
          
          <div className="loader">
            </div>
           </div>
            </If>
          </>
        )

    }
  }



  export default Results;