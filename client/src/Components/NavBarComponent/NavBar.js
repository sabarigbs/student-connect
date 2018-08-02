import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Logo</a>
                        <ul className="right hide-on-small-and-down">
                            <li>
                                Logout
                            </li>
                        </ul>
                        <ul className="left hide-on-med-and-up show-on-small">
                            <li>
                                Small
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

export default NavBar;
