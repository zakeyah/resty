import React from 'react';
import ReactJson from 'react-json-view'
import {If,Else} from './If'
import './Results.scss'




  class Results extends React.Component {
      render(){
        
        // console.log(this.props.data.headers)
        // console.log(this.props.data)
        return (

          <>
          <div id="output">
          <Else condition={this.props.data.flag} condition2={this.props.data.headers}>
          {/* <IfEmpty condition={this.props.data.headers}> */}

       
                  <ReactJson src={this.props.data.headers} name="headers" />
                  <ReactJson src={this.props.data.results} name="response" />
        

          {/* </IfEmpty> */}
          </Else>

          <If condition={this.props.data.flag} >
          
          <div className="loader"></div>
            <p>loading!!!!!!!</p>
            </If >
            </div>

          </>
        )

    }
  }



  export default Results;