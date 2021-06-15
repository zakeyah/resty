import React from 'react';
// import ReactJson from 'react-json-view'




  class History extends React.Component {

    handelClick=e=>{
        e.preventDefault();
        let [method,url]=(e.target.innerText).split(" ");
      this.props.chosen({method,url})
    }
      render(){

        return (
         <div id="history-output">
              {/* <Then> */}
                {
                    this.props.data.map((query,index)=>{
                        return(
                            <div key={index}  onClick={this.handelClick}>
                                <p>{query.method} {query.url}
                                </p>
                             </div>
                        )
                    })
                }
            {/* </Then> */}
                  {/* <ReactJson src={this.props.data.headers} name="headers" />
                  <ReactJson src={this.props.data.results} name="response" /> */}
            </div> 
        )

    }
  }



  export default History;