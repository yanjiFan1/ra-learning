import React from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
export default class Dashboard extends React.Component {
	render() {
    return (
      <div>
      	<Breadcrumb first="首页" second="dashboard" />
      	Dashboard
      </div>
    )
  }
}