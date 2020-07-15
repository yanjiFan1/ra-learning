import React from 'react';
import Routes from '../../../routes/index'
import { renderRoutes } from "../../../routes/react-router-config/index.js";

export default class Role extends React.Component {
	constructor(props){
    super(props)
  }
  
	render() {
    return (
      <div>
      	Role
      	// {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}