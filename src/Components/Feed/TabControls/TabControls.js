import React from 'react';
import './TabControls.css';

import Tab from '../Tab/Tab';

export default class TabControls extends React.Component {
    constructor(props) {
        super(props);
        this.updateTabControls = this.updateTabControls.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.state = {
            activeTab: 0
        }
    }
    
    updateTabControls() {
        // Deactivates all the tabs under parent
        let childrens = document.querySelectorAll('.tab');
        childrens.forEach(function(e){
            e.classList.remove('active');
        });
    }

    sluggify(s) {
        return s.toLowerCase().replace(/[^\w ]+/g,'').replace(" ", "-");
    }
    
    updateDone(e) {
        // Changes parent/child state
        let active = e;
        let slug = this.sluggify(active.target.textContent);
        let index = [...active.target.parentElement.children].indexOf(active.target);
        this.props.updateScreen(index, slug);
        this.setState({activeTab: index})
    }
    
    render() {
        return (
            <div className="tabControls row">
                <Tab updateTabControls={this.updateTabControls}
                    updateDone={this.updateDone} 
                    activeTab={this.state.activeTab}>Your Feed</Tab>
                <Tab updateTabControls={this.updateTabControls}
                    updateDone={this.updateDone}
                    activeTab={this.state.activeTab}>Explore</Tab>
                <Tab updateTabControls={this.updateTabControls}
                    updateDone={this.updateDone}
                    activeTab={this.state.activeTab}>Global</Tab>
                <Tab updateTabControls={this.updateTabControls}
                updateDone={this.updateDone}
                activeTab={this.state.activeTab}>Messages</Tab>
            </div>
        )
    }
}