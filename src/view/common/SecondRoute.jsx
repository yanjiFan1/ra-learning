import React from 'react';
import { renderRoutes } from "../../routes/react-router-config/index.js";
export default class SecondRoute extends React.Component {
	constructor(props){
	  super(props)
	}
	render() {
		console.log(this.props.route.routes)
    return (
      <div>
      	{renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}
