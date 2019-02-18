import React, { Component } from 'react';

class dashboard extends Component {

    componentDidMount() {
        document.title = `Oi bruv | Dashboard`
    }
    render() {
        return (
            <div>
                <h1>Dashboard deez nuts 4Head</h1>
            </div>
        );
    }
}

export default dashboard;