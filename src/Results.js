import React from 'react';
import ReactJson from 'react-json-view'




  class Results extends React.Component {
      render(){
        // console.log(this.props.data)

        return (
         <div id="output">
                  <ReactJson src={this.props.data.headers} name="headers" />
                  <ReactJson src={this.props.data.results} name="response" />
            </div> 
        )

    }
  }



  export default Results;