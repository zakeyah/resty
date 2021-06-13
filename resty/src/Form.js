import React from 'react';
import './Form.scss'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      metod: ''
    };
  }

  handleBtnClick = event => {
    console.log(this.props.data)
    event.preventDefault();
    const url = event.target.url.value;
    const method = event.target.method.value;
    console.log(event.target.method);
    this.setState({ url: url, method: method });
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
        <div id="output">
          <h3> {this.state.method}         {this.state.url}</h3>
        </div>
      </div>
    )
  }
}

export default Form;