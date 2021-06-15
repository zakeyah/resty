import React from 'react';
import './Form.scss'
import superagent from 'superagent'

class Form extends React.Component {



  handleBtnClick =async event => {
    try{
      event.preventDefault();
        let method ;
        console.log(';;;;;;;;;;;;;;;;;;',this.props.data.ChosenQuery)
      if (this.props.data.ChosenQuery.url!==""){
        method = this.props.data.ChosenQuery.method;
        console.log(this.props.data.ChosenQuery.method,'.......................')
      }else{

        method = event.target.method.value;
      }
      console.log(method,'method /////////////////')
      let  url = event.target.url.value;
      let body = event.target.body.value;
      let raw = await superagent[`${method}`](url).send({record:body})
      this.props.save({method,url})
      const headers = raw.headers;
      this.props.handler(raw,headers)
      console.log(method,'................method')
      this.props.reset();
    }catch (error) {
      console.log(error.message);
  }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleBtnClick}>

          <input name="url" defaultValue={this.props.data.ChosenQuery.url} />
          <button tybe="submit" >Go</button>
          <br />
          <input type='radio' name='method' value='get' />
          <label>GET</label>
          <input type='radio' name='method' value='post' />
          <label>POST</label>
          <input type='radio' name='method' value='put' />
          <label>Put</label>
          <input type='radio' name='method' value='delete' />
          <label>Delete</label>
          <input name="body" />
        </form>
     
      </div>
    )
  }
}

export default Form;