import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavLink to='/' activeClassName="is-active" exact={true}>Login</NavLink>
                    <NavLink to="/signup" activeClassName="is-active">Signup</NavLink>
                    <NavLink to='/homepage' activeClassName="is-active">Homepage</NavLink>
                </div>
            </div>
        );
    }
}
export default Header;