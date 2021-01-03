import logo, { ReactComponent } from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import React from 'react';

const responseFacebook = (response) => {
  console.log("login result", response);
}

const componentClicked=(data)=>{
  console.warn(data)
}


class App extends React.Component {
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

    </div>
  );
}
}

export default App;
