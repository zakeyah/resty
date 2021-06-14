import React from 'react';
import ReactJson from 'react-json-view'


// const Results = ({data}) => {

//     console.log(data)
//     return (
//      <div id="output">

//           {/* <h3> {this.props.data.state.results}         </h3> */}
//           {/* <h5>{this.state.res}</h5> */}
//         </div> 
//     )
//   }

  class Results extends React.Component {
      render(){
        console.log(this.props.data)

        return (
         <div id="output">
                  <ReactJson src={this.props.data.headers} name="headers" />
                  <ReactJson src={this.props.data.results} name="response" />
              {/* <h3> {this.props.data.headers}         </h3> */}
              {/* <h5>{this.state.res}</h5> */}
            </div> 
        )

    }
  }



  export default Results;