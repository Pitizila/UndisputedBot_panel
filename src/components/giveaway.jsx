import React, { Component } from 'react';

class giveaway extends Component {

    componentDidMount() {
        document.title = `Oi bruv | Giveaway`
    }
    render() {
        return (
            <div>
                <h1>Giveaway deez nutz</h1>
            </div>
        );
    }
}

export default giveaway;