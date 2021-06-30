import React from 'react';
import './History.scss'
import {Link} from 'react-router-dom';




  class History extends React.Component {

    handelClick=e=>{
        e.preventDefault();
        let [method,url]=(e.target.innerText).split(" ");
      this.props.chosen({method,url})
      console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',e.target.method)
    }
      render(){

        return (
         <div id="history-output">
                {
                    this.props.data.map((query,index)=>{
                        return(
                            <div key={index} className={index} onClick={this.handelClick} >
                            <Link to="/">{query.method} {query.url} </Link>
                             </div>
                        )
                    })
                }
            </div> 
        )

    }
  }



  export default History;