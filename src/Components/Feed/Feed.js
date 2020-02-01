import React from 'react';
import './Feed.css';

export default class Feed extends React.Component {
    activeSwap = (e) => {
        const { target: { value } } = e;
    }
    
    render() {
        return (
            <div className="feedCon">
                <div className="tabControls row">
                    <div className="active tab" onClick={this.activeSwap}>Your Feed</div>
                    <div className="tab" onClick={this.activeSwap}>Explore</div>
                    <div className="tab" onClick={this.activeSwap}>Global</div>
                    <div className="tab" onClick={this.activeSwap}>Messages</div>
                </div>
                <div className="tweet">
                    meow
                </div>
            </div>
        )
    }
}