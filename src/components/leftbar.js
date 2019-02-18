import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const shad = { boxShadow: '0.5em 0 0.8em rgba(0, 0, 0, 0.349)' }

class leftbar extends Component {

    componentDidMount() {
        document.title = `Oi bruv`
    }
    render() {
        return (
            <div>


                <div className="bg-dark" style={shad} id="sidebar-wrapper">
                    <div className="sidebar-heading">
                        <Link to="/dashboard">
                            <img className="logo" alt="undisputed logo" src={window.location.origin + '/Transparent.png'} />
                        </Link>
                    </div>
                    <div className="list-group list-group-flush">
                        <Link to="/dashboard" className="list-group-item list-group-item-action bg-dark">Dashboard</Link>
                        <Link to="/commands" className="list-group-item list-group-item-action bg-dark">Commands</Link>
                        <Link to="/giveaway" className="list-group-item list-group-item-action bg-dark">Giveaway</Link>
                        <Link to="/profile" className="list-group-item list-group-item-action bg-dark">Profile</Link>
                        <Link to="/connections" className="list-group-item list-group-item-action bg-dark">Bot Connections</Link>
                        <Link to="/login" className="list-group-item list-group-item-action bg-dark">Login</Link>
                        <Link to="/logout" className="list-group-item list-group-item-action bg-dark">Logout</Link>
                    </div>

                    <div id="footer">
                        <small>Copyrights <a href="https://twitch.tv/petizila">PetiZila</a>&copy;</small>
                    </div>
                </div>

            </div>
        );
    }
}

export default leftbar;