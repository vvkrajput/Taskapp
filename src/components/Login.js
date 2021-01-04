// import logo, { ReactComponent } from './logo.svg';
import '../App.css';
import FacebookLogin from 'react-facebook-login';
import React from 'react';
import GoogleLogin from 'react-google-login';

const responseFacebook = (response) => {
  console.log("login result", response);
}

const componentClicked=(data)=>{
  console.warn(data)
}




class Login extends React.Component {

  responseGoogle=(response)=>{
  console.log(response);
  console.log(response.profileObj);
  }
 
  render(){
  return (
    <div>
    <h1 className="login"> LOGIN </h1>

    <FacebookLogin
    appId="411497496933523"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />

    <GoogleLogin
      clientId="551355513411-it7ekmiog6r3upel2lh0nkrinidss5n7.apps.googleusercontent.com"
      buttonText="Login With Google"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

    </div>
  );
}
}

export default Login;