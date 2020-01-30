import React, { Component } from 'react'
import axios from 'axios'

import RenderShutterstockImg from './RenderShutterstockImg/RenderShutterstockImg'

export class Shutterstock extends Component {


  componentDidMount(){
   let body = {
      "client_id": "860bde70bb335163e2e4",
      "client_secret": "225d245d28e5b1a37db7fd4ceb8cdf360a3ae5a7",
      "grant_type": "authorization_code",
      "expires": false,
      "code": "VaRLQ3rICmWjGr4ciI-GwR"
    };

    axios.post("https://api.shutterstock.com/v2/oauth/access_token", {
      "json": true,
      "headers": {
        "User-Agent": "request"
      },
      "body": body,
      "useQueryString": true
    })
      .then((res) => {
        console.log(res);
      });


  }

  render() {
    return (
      <div className='shutterstock'>
        {/* <RenderShutterstockImg album={this.state.res}/> */}
      </div>
    )
  }
}

export default Shutterstock
