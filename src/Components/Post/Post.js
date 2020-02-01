import React from 'react';
import './Post.css'

export default class Post extends React.Component {
    limitCount() {
        console.log(document.getElementById("newPost").text.length());
        var opacity = 50 - document.getElementById("newPost").text.length();
        return 0;
    }
    
    render() {
        // Need to make a textarea component with onchange handler adjusting the opacity as typing happens

        return (
            <div class="postCard col">
                <textarea id="newPost" placeholder="Just Zuckin around"></textarea> 
                <div className="controls row">
                    <div className="counter" data-remaining={this.limitCount}></div>
                    <button className="green button">Tweeterify</button>
                </div>
            </div>
        )
    }
}