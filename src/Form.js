import React from 'react';
import './Form.scss'
import superagent from 'superagent'

class Form extends React.Component {



  handleBtnClick =async event => {
    event.preventDefault();
    const url = event.target.url.value;
    // const method = event.target.method.value;
    // console.log(event.target.method);
    // this.setState({ url: url, method: method });
    let raw = await superagent.get(url);
    // console.log("raw >>>>>>>>>>>>>>>>>>>>: ", raw)
    // console.log("headers >>>>>>>>>>>>>>> : ", raw.headers);
    const headers = raw.headers;
    // const result = data.results;
    // console.log(count,result)
    this.props.handler(raw,headers)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleBtnClick}>

          <input name="url" />
          <button tybe="submit" >Go</button>
          <br />
          <input type='radio' name='method' value='GET' />
          <label>GET</label>
          <input type='radio' name='method' value='POST' />
          <label>POST</label>
          <input type='radio' name='method' value='Put' />
          <label>Put</label>
          <input type='radio' name='method' value='Delete' />
          <label>Delete</label>
          {/* <button name="method" id="Get" value="Get" type="button">Get</button>
            <button name="method" id="POST" value="POST"  >Post</button> 
            <button name="method"  value="put" >Put</button>
            <button name="method"  value="delete" >Delete</button> */}
        </form>
     
      </div>
    )
  }
}

export default Form;