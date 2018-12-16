import React, { Component } from 'react';
// import './css/loginCSS.css'
import '../styles/App.css';
import '../styles/styles.scss'
// import {NavLink} from 'react-router-dom';

class Signup extends Component {
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
    }
    register(e) {
        e.preventDefault();
        const usernameI = e.target.elements.username.value;
        const passwordI = e.target.elements.password.value;
        const firstnameI = e.target.elements.firstname.value;
        const lastnameI = e.target.elements.lastname.value;
        const departmentI = e.target.elements.department.value;
        const dobI = e.target.elements.dob.value;
        const roleI = e.target.elements.role.value;

        console.log(usernameI + firstnameI + lastnameI + departmentI +dobI + roleI);
        console.log(passwordI);
        console.log("signup btn clicked")

    }
    render() {
        return (
            <div>
               
                <div className="box">

                    <form className="form-horizontal" onSubmit={this.register}>
                        <div className="contentL">
                        <div>
                            <img alt="logo" className="logoM" src="img/logo0.png"/>
                        </div>
                        <div className="boxHeader">

                            <h1>SignUP </h1>
                        </div>
                        <div className="boxContent">
                            <input placeholder="username" type="text" id="username" name="username" /><br /><br />
                            <input placeholder="password" type="password" id="password" name="password" /><br /><br />
                            <input placeholder="firstname" type="text" id="firstname" name="firstname" /><br /><br />
                            <input placeholder="lastname" type="text" id="lastname" name="lastname" /><br /><br />
                            <input  type="date" id="date" name="dob" /><br /><br />
                            <input placeholder="department" type="text" id="department" name="department" /><br /><br />
                            <input placeholder="role" type="text" id="role" name="role" /><br /><br />
                            
                            
                            <input type="submit" id="loginBtn" className="primaryBtn" />
                        </div>
                        </div>
                        

                    </form>
                </div>


            </div>
        );
    }
}

export default Signup;