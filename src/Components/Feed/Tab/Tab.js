import React from 'react';
import './Tab.css';

//Tabs not consistently working
export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.activeSwap = this.activeSwap.bind(this);
        this.deactivateSelf = this.deactivateSelf.bind(this);
    }

    deactivateSelf(e) {
        this.setState({ active: false });
    }

    activeSwap(e) {
        const currentState = this.state.active;
        this.props.updateTabControls(this.deactivateSelf);
        this.setState({ active: !currentState });
        this.props.updateDone(e);
    }
    
    render() {
        return (
            <div onClick={this.activeSwap} 
                className={this.state.active ? 'active tab': 'tab'}>
                    {this.props.children}
            </div>
        )
    }
}