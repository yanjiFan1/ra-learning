import React, {Component} from 'react'
import Exception from 'ant-design-pro/lib/Exception';
import './index.less'

export default class E404 extends Component {
    render() {
        const actions = (
            <div>12313</div>
        );
        return (<Exception type="404" actions={actions}/>)
    }
}
