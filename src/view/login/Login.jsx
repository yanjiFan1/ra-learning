/**
 * Created by yanji on 2020/7/1.
 */
import React from 'react';
import { Button, Layout } from 'antd';
import './login.less';
const { Header, Content, Footer } = Layout;


class Login extends React.Component {
	constructor(props){
	  super(props);
	}

  componentDidMount(){
      let stars = document.getElementsByClassName('stars')[0];
      let star = document.getElementsByClassName('star')
      // js随机生成流星
      for (var j = 0; j < 50; j++) {
          var newStar = document.createElement("div")
          newStar.className = "star"
          newStar.style.top = randomDistance(20, -30) + 'px'
          newStar.style.left = randomDistance(220, 20) + 'px'
          // stars.appendChild(newStar)
      }

      // 封装随机数方法
      function randomDistance(max, min) {
          var distance = Math.floor(Math.random() * (max - min + 1) * 10 + min)
          return distance
      }

      // 给流星添加动画延时
      for (var i = 0, len = star.length; i < len; i++) {
          if (i % 6 == 0) {
              star[i].style.animationDelay = '0s'
          } else {
              star[i].style.animationDelay = i * 0.8 + 's'
          }
      }
  }
  login = (e) => {
  	console.log(this)
    this.props.history.push('/admin/home/')
  };
  render() {
      return (
        <Layout className="login" >
          <Content className="login-content">
            <div className="login-form" >
              <div className="text-title">烟祭</div>
              <div className="text-sub-title">YANJI SYSTEM</div>
              <Button type="primary" onClick ={this.login}>登录</Button>
            </div>
          </Content>
          <Footer className="login-footer">
          © 1997-{new Date().getFullYear()} 烟祭
          </Footer>
          <div className="stars"></div>
        </Layout>
      );
  }
}

export default Login;