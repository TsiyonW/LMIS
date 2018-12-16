import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-dom';
// import './css/loginCSS.css'

class Login extends Component {
    authenticate(e) {
        e.preventDefault();
        const usernameI = e.target.elements.username.value;
        const passwordI = e.target.elements.password.value;
        console.log(usernameI);
        console.log(passwordI);
        console.log("login btn clicked")

    }
    render() {
        return (
            <div>
                <div className="box">

                    <form className="form-horizontal" onSubmit={this.authenticate}>
                        <div className="contentL">
                        <div>
                            <img alt="logo" className="logoM" src="img/logo0.png"/>
                        </div>
                        <div className="boxHeader">

                            <h1>Welcome </h1>
                        </div>
                        <div className="boxContent">
                            <input placeholder="username" type="text" id="username" name="username" /><br /><br />
                            <input placeholder="password" type="password" id="password" name="password" /><br /><br />
                            <input type="submit" id="loginBtn" className="btn btn-primary" />
                        </div>
                        </div>
                        

                    </form>
                </div>


            </div>
        );
    }
}

export default Login;