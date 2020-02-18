import React from 'react';
import TabControls from './TabControls/TabControls';
import './Feed.css';

import Screen from './Screen/Screen';


export default class Feed extends React.Component {
    updateScreen(screen_index, slug) {
        console.log(screen_index);
        console.log(slug);
    }

    render() {
        return (
            <div className="feedCon">
                <TabControls updateScreen={this.updateScreen} ></TabControls>
                <div className="screenCon">
                    <Screen></Screen>
                    <Screen></Screen>
                    <Screen></Screen>
                    <Screen></Screen>
                </div>
            </div>
        )
    }
}