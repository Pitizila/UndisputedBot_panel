import React, { Component } from 'react';

class profile extends Component {
    constructor(props) {
        super()
        this.state = {
            Nickname: 'Deez nutz idiot'
        };
    }
    componentDidMount() {
        document.title = `Oi bruv | Profile`
    }
    render() {
        return (
            <div className="col-4 profile">
                <div>
                    <h1>Profile deez nutz</h1>

                    <p>
                        {this.state.Nickname}
                    </p>
                </div>
            </div>
        );
    }
}

export default profile;