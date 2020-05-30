import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {getUser, logout} from './helpers';

const Nav = ({history}) => (
    <nav>
        <ul className="nav nav-tabs"  className="topnav">
            <li>
               <img src="../logo192.png"  alt="logo" width="30" height="30" style={{ marginTop: 5}} />
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
            <Link to="/Create" className="nav-link">ADD DATA</Link>
            </li>
            <li className="nav-item">
            <Link to="/Read" className="nav-link">READ RECORDS</Link>
            </li>
            {!getUser() && (
                <li className="nav-item" style={{ marginLeft: 700}}>
                <Link to="/Login" className="nav-link">ADMIN LOGIN</Link>
                <img src="../sales.png"  alt="admin" width="28" height="30" style={{ marginTop: 5}} />
                </li>
            )}

            {getUser() && (
                <li onClick={() => logout(()=>history.push('/'))} className="nav-item" style={{ marginLeft: 700}}>
                    <Link className="nav-link" style={{ color: 'blue'}}>LOGOUT</Link>
                <img src="../sales.png"  alt="admin" width="28" height="30" style={{ marginTop: 5}} />
                </li>
            )}
            
            
        </ul>
    </nav>



);

export default withRouter(Nav);