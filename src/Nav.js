import React from 'react';

import { NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

function refresh() {
    const history = createHistory();
    history.go(0);
}

// Render the Nav component.
const Nav = props => 
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/dogs' onClick={refresh}>Dogs</NavLink></li>
            <li><NavLink to='/cats' onClick={refresh}>Cats</NavLink></li>
            <li><NavLink to='/computers' onClick={refresh}>Computers</NavLink></li>
        </ul>
    </nav>;

// Send the Nav Component up to the parent Application Component Class.
export default Nav;